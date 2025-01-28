<p align="center">
  <img alt="Flows banner" src="./docs/github-banner.png">
</p>

## Flows private repository

TODO: Write an internal README.

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

pnpm be dev
pnpm app dev
```
