# NotesApp

Sample app for demonstrating MERN stack deployment

<hr>

#### Nginx Configs

```bash

server {
        listen 80;
        listen [::]:80;
        root /home/azureuser/apps/my-notes-app/client/build;
        index index.html index.htm index.nginx-debian.html;
        server_name 20.51.228.239;
        location / {
                    try_files $uri /index.html;
                   }
        location /api {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
           }
}
```

#### Usefull Commands

```bash

sudo apt update && sudo apt upgrade -y

sudo apt-get install nginx -y

sudo systemctl enable nginx

sudo systemctl status nginx

sudo ln -s /etc/nginx/sites-available/myserver /etc/nginx/sites-enabled/

sudo service nginx restart

node --version

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo systemctl start mongod

sudo systemctl enable mongod.service

sudo chown -R mongodb:mongodb /var/lib/mongodb

sudo chown mongodb:mongodb /tmp/mongodb-27017.sock

sudo service mongod restart

sudo systemctl status mongod

scp -i MtServer_key.pem -r ./my-notes-app azureuser@20.51.228.239:/home/azureuser/apps/

pm2 start app.js -i max

```

Below is a template for a README file that outlines the Docker process for your project:

---

## Overview

Brief overview of the project and its purpose.

## Prerequisites

- Docker Engine installed on your local machine. [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose installed on your local machine. [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd <project-directory>
   ```

3. **Environment Configuration**:

   - Adjust environment variables as needed by modifying `.env` files in the `client` and `server` directories.

4. **Build Docker Containers**:

   ```bash
   docker-compose build
   ```

5. **Run Docker Containers**:

   ```bash
   docker-compose up -d
   ```

6. **Access Services**:

   - React Client: [http://localhost:3000](http://localhost:3000)
   - Server: [http://localhost:8080](http://localhost:8080)

7. **Stop Docker Containers**:
   ```bash
   docker-compose down
   ```

## Update Process

### Client Update

1. **Make Changes**: Modify the file(s) in the `client` directory as needed.

2. **Rebuild Client Docker Image**:

   ```bash
   docker-compose build client
   ```

3. **Recreate Client Docker Container**:
   ```bash
   docker-compose up -d --no-deps --build client
   ```

### Server Update

1. **Make Changes**: Modify the file(s) in the `server` directory as needed.

2. **Rebuild Server Docker Image**:

   ```bash
   docker-compose build server
   ```

3. **Recreate Server Docker Container**:
   ```bash
   docker-compose up -d --no-deps --build server
   ```

## Directory Structure

Structure of project directory.

```
project-root/
│
├── client/
│   ├── Dockerfile
│   ├── .env
│   └── ...
│
├── server/
│   ├── Dockerfile
│   ├── .env
│   └── ...
│
├── docker-compose.yml
└── README.md
```
