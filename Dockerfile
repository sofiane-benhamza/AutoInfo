# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Disable npm audit and run npm install
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# ARG PORT=5000

# EXPOSE $PORT

# Define the command to start the application (replace with your actual start command)
CMD ["npm", "run", "dev"]
