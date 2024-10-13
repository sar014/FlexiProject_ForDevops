# Use an official Node.js runtime as a parent image
FROM node:21.7.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY . .

# Expose the backend port (for example, 5000)
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
