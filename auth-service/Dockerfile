FROM node:lts-alpine
# Use an official Node.js runtime as the base image


# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the application's port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]