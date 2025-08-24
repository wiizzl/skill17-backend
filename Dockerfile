FROM oven/bun:latest
WORKDIR /app
COPY . .
RUN bun install

USER bun
EXPOSE 80
CMD [ "bun", "run", "start" ]