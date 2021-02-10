FROM ubuntu:14.04

FROM nginx:1.17.4

COPY assets /usr/share/nginx/html/assets/

COPY style.css issue-details issue-list /usr/share/nginx/html/

EXPOSE 80
