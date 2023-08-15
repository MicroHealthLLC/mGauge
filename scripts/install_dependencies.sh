#!/bin/bash

# Navigate to your application's directory
cd /var/www/mGauge

# Update package manager (npm or yarn)
npm install

# If you're using yarn:
# yarn install

# Additional commands if needed
# Example: build assets or run other setup tasks
 npm run build

# Restart or reload your application if necessary
# Example: Restart a Node.js server
# pm2 restart your-app-name

# Exit with a success status
exit 0
