# student-management-frontend/Dockerfile

# Build Stage
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
