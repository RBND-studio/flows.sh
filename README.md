# Flows private repository

This a private repository for Flows. Some parts of the repository get mirrored to the public [RBND-studio/flows.sh](https://github.com/RBND-studio/flows.sh) repository with proprietary code removed.

## Local development

### First time setup

1. Install Docker and NodeJS
2. Add .env files for `app`, `backend` and root env for docker containers
3. Create docker network `docker network create flows_local`
4. Install NPM packages `pnpm install`

### Run the Frontend, Backend, DB

```sh
docker compose up -d
# Don't forget to stop the containers when you're done by running:
# docker compose down

pnpm be:dev
pnpm app dev
```

## Lint URLS

Docs:

```sh
URL="http://host.docker.internal:3000/docs" pnpm run docs check-links
```

Web:

```sh
URL="http://host.docker.internal:6002/" pnpm web check-links
```

For local linting uncomment (remove #) /docs in `apps/web/linkcheck-skip-urls.txt` to exclude docs links.
