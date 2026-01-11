# Process of setting up VPS for app deployment

This checklist lists all the steps needed to follow when setting up new VPS for hosting apps. This is useful during a disaster recovery event.

## Users

1. Setup firewall
2. Add non root user - https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04
3. Add ssh key for user
4. Update packages
5. Enable Ubuntu Livepatch
6. Disable root ssh login - https://www.ionos.com/help/server-cloud-infrastructure/getting-started/important-security-information-for-your-server/deactivating-the-ssh-root-login

## Setup

- Enable Swap - https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04
- Install nginx - https://nginx.org/en/linux_packages.html#Ubuntu
- Install certbot - https://certbot.eff.org/instructions?ws=nginx&os=snap
- Install Docker - https://docs.docker.com/engine/install/ubuntu
- Follow Docker postinstall - https://docs.docker.com/engine/install/linux-postinstall
- Setup GH actions runner
- Login to Docker registry
- Setup Twingate resource for SSH connection
- Disallow SSH (22) port in firewall
