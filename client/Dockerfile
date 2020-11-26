
# Step 1
FROM node:lts-slim as builder

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

 
# Stage 2

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 9720
CMD ["nginx", "-g", "daemon off;"]


# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
# FROM nginx:1.16.0-alpine
# COPY --from=builder /react-frontend/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]