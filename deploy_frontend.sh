#!/bin/bash

echo "===== Starting IndoGlobal Frontend Deploy ====="

# Navigate to the repo
cd /var/www/running_sites/igef.net/IndoGlobal/

# Pull latest code
echo "Pulling latest code..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the project
echo "Building project..."
pnpm run build

# Copy build output to LIVE SITE ROOT
echo "Copying build output to live site..."
cp -rT /var/www/running_sites/igef.net/IndoGlobal/dist  /var/www/running_sites/igef.net/

echo "===== IndoGlobal Frontend Deploy Completed ====="
