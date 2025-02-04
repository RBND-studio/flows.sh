FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=ui --docker


FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore

# We cannot use json output because `prepare` script is missing the pandacss config file
# COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
COPY --from=builder /app/out/full/ .


RUN npm i -g corepack@latest
RUN corepack enable pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm turbo run build --filter=ui

FROM nginx:alpine AS runner

COPY --from=installer /app/packages/ui/storybook-static /usr/share/nginx/html
