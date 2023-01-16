FROM node:latest as builder 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run ng build 

FROM ngnix:alpine

WORKDIR /usr/share/ngnix/html

RUN rm -rf ./*

COPY --from=builder /usr/src/app/dist/angular-app .

ENTRYPOINT ["ngnix", "-g","daemon off;"]

# FROM node:lts-alpine
# # Use an official Node.js runtime as the base image


# # Set the working directory within the container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Expose the application's port
# EXPOSE 4200

# # ,"--host=0.0.0.0"
# # Start the application
# CMD ["npm", "start"]
