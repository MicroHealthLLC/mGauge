#!/bin/bash

# If the server PID file exists
if [ -f server.pid ]; then
  # Read the PID from the file
  server_pid=$(cat server.pid)

  # Kill the server process
  kill $server_pid

  # Wait for the process to terminate
  wait $server_pid

  # Remove the PID file
  rm server.pid
fi

# Exit with a success status
exit 0
