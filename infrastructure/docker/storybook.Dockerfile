FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=design-system --docker


FROM base AS installer
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
RUN yarn global add pnpm
RUN pnpm install

COPY --from=builder /app/out/full/ .
RUN yarn turbo run build --filter=design-system...

FROM nginx:alpine AS runner

COPY --from=installer /app/apps/design-system/storybook-static /usr/share/nginx/html
