
FROM node:20.15.1 as builder

# create work directory in app folder
WORKDIR /app


# copy over package.json files
COPY package.json /app/
COPY yarn.lock /app/

# install all depencies
RUN yarn install

# copy over all files to the work directory
ADD . /app

# build the project
RUN yarn run build

# start final image
FROM node:20.15.1


WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/.output  app/.output
COPY --from=builder /app/.nuxt  app/.nuxt
COPY .env /app/

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000:3000/tcp
EXPOSE 3000:3000/udp

# run the build project with node
ENTRYPOINT ["node", "app/.output/server/index.mjs"]