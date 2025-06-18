FROM node:22-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
ARG APP
RUN turbo prune --scope=${APP} --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat alpine-sdk python3
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml

RUN npm i -g corepack@latest
RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
ARG APP
RUN pnpm turbo run build --filter=${APP}...

FROM base AS prod-installer
WORKDIR /app
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN npm i -g corepack@latest
RUN corepack enable pnpm
RUN pnpm install --production --frozen-lockfile

FROM base AS runner
WORKDIR /app

COPY --chown=node:node --from=installer /app/packages/db/drizzle ./packages/db/drizzle

ARG APP
COPY --chown=node:node --from=installer /app/apps/${APP}/package.json ./apps/${APP}/
COPY --chown=node:node --from=prod-installer /app/apps/${APP}/node_modules ./apps/${APP}/node_modules
COPY --chown=node:node --from=prod-installer /app/node_modules ./node_modules
COPY --chown=node:node --from=prod-installer /app/package.json ./package.json
COPY --chown=node:node --from=installer /app/apps/${APP}/dist ./apps/${APP}/dist
COPY ./apps/${APP}/.env ./apps/${APP}/.env

WORKDIR /app/apps/${APP}
CMD ["node", "dist/main.js"]