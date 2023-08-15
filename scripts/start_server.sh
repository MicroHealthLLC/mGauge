#!/bin/bash

# Navigate to your application's directory
# cd ..

# Start your Node.js server using Express
# Replace 'router.js' with the appropriate entry point file
npm run start &

# Save the process ID of the server
echo $! > server.pid

# Exit with a success status
exit 0
