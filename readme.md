# Stub Boxoffice
###### Stub Boxoffice is a ticketing/resale marketplace built on the TicketNetwork SOAP API with Express, Node, & MySQL.

---
## Server Information

Host: ded2061.inmotionhosting.com

- **Root**
  - Username: `root`
  - Password: `redacted`

- **twstub**
  - Username: `twstub`
  - Password: `redacted`

how to login w/ ssh:
 - ssh root@ded2061.inmotionhosting.com -i `**ssh key file path**`
 - must make sure IP address is whitelisted else it'll hang

---
## NGINX
##### Uses/Function:
- serving assets
- reverse proxy
- route caching
- ssl/tls
- compression - gzip

##### notes
- NGINX configuration files are located in `/etc/nginx/`
- The root conf file is `nginx.conf`
- stubboxoffice.com .conf file located at `/etc/nginx/conf.d/stubbox.conf`
- `/etc/nginx/conf.d/default.conf` was renamed to `default.conf.disabled`
-   when its imported to main `nginx`, it knocks out the stubbox conf file and nginx doesnt properly serve the assets/app pages
- `/etc/nginx/vhosts/` should be empty

#### TLS/SSL
  - `/home/twstub/ssl/` - ssl keys/csr/cert generated by inmotion/cpanel
    - unsure if filenames ever change. I copied && store them nginx folder
  - `/etc/nginx/ssl/stubboxoffice_com/` - ssl cert/key
    - **generated.key** - ssl/tls key
    - **ssl-bundle.crt** - ssl/tls certificate

---
## Express

- to run application in enviornment:
  - **development**: `npm run dev`
  - **production** `npm run production`

- Routes for reloading TicketNetwork information
  - http://**{{ home_url }}**/tn/**{{ function }}**?c=`redacted`

#### Application Structure

- **assets** - frontend assets served by nginx/express in that order
- **config** `hidden` - .env files
- **knex** - knex specific files
- **logs** - error logs
- **routes** - application controller routes
- **ssl** `hidden` - a copy of the ssl cert/key thats being served by NGINX
- **views** - ejs templates to generate frontend html
- **app.js** - application entry file
- **ecosystem.config.js** - startup script for pm2 to run the application on the server
- **knexfile.js** - knex configuration/options

---
## ForestAdmin
- **Dashboard**:
  - https://app.forestadmin.com/login
  - http://stubboxoffice.com/admin by 302 redirection

- **FA Dashboard Email**: bernin@twowords.co
- **FA Dashboard Password**: `redacted`

- **Run w/ pm2 on server with name `ForestAdmin`**:
  - `pm2 start bin/www -n ForestAdmin`

- **MySQL Connection**: 
  - mysql://twowords:`redacted password`@localhost:3306/`redacted db name`

- **FA Production ENV**:
  - ENV: `redacted`
  - AUTH: `redacted`
