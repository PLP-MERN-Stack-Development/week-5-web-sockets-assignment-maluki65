#!/bin/bash

echo "Starting backend deployment..."

# Pull latest code
git pull origin main

# Install dependencies
npm install

# Build if needed
# npm run build

# Restart server (example using pm2)
pm2 restart app

echo "Deployment completed!"
