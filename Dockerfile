# Use a lightweight Nginx alpine image to serve static files
FROM nginx:alpine

# Copy static assets and HTML files into the default Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
