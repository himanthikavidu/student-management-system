# student-info-backend/Dockerfile

# Use Node.js LTS
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
