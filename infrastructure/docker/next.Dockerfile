FROM node:20-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
ARG APP
RUN turbo prune --scope=${APP} --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat alpine-sdk python3
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
# We cannot use json output because `prepare` script is missing the pandacss config file
# COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
COPY --from=builder /app/out/full/ .


RUN npm i -g corepack@latest
RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile


# Build the project
ARG APP
RUN pnpm turbo run build --filter=${APP}...

FROM base AS runner
WORKDIR /app

RUN npm install -g sharp
ENV NEXT_SHARP_PATH=/usr/local/lib/node_modules/sharp

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

ARG APP
RUN cp /app/apps/${APP}/next.config.js . || true
RUN cp /app/apps/${APP}/next.config.mjs . || true
COPY --from=installer /app/apps/${APP}/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP}/.next/static ./apps/${APP}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP}/public ./apps/${APP}/public

ENV SERVER_FILE=apps/${APP}/server.js

# CMD ["node", "$SERVER_FILE"]
CMD ["sh", "-c", "node $SERVER_FILE"]

