# Process of setting up VPS for app deployment

This checklist lists all the steps needed to follow when setting up new VPS for hosting apps. This is useful during a disaster recovery event.

## Users

1. Setup firewall
2. Add non root user - https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-20-04
3. Add ssh key for user
4. Update packages
5. Enable Ubuntu Livepatch
6. Disable root ssh login - https://www.digitalocean.com/community/tutorials/how-to-disable-root-login-on-ubuntu-20-04

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

<!-- cspell:words Databasus logql -->

## Restoring a database backup

Databasus takes a backup every day and keeps each one for 30 days. Restoring a backup brings back every organization and user account deleted after it was taken, so delete them again before the app takes traffic.

1. Note when the backup you are restoring was taken.
2. Stop the backend, worker and websocket, then restore the backup.
3. In Grafana Explore, pick the Loki data source, set the time range from the backup time to now and run:

   ```logql
   {service_name="flows-backend-prod"} |= "Customer data deleted"
   ```

   Each line carries a `deletedOrganizationId` or a `deletedUserId`.

4. Delete those ids again. Deleting an organization cascades to all of its data, and deleting a user cascades to their sessions, accounts and memberships:

   ```sql
   DELETE FROM organization WHERE id IN ('<deletedOrganizationId>', ...);
   DELETE FROM "user" WHERE id IN ('<deletedUserId>', ...);
   ```

5. Start the backend, worker and websocket.

This only works while Loki keeps backend logs at least as long as the oldest backup (30 days). The lines are logged at warn level because production log shipping drops info lines.
