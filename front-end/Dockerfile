FROM node:16-alpine

RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-s","build"]

# npm run build
# docker build -t givejeong2468/blog-front .
# docker push givejeong2468/blog-front
# docker pull givejeong2468/blog-front