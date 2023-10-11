# rust-tool

Very simple rcon tool for rust. It uses RCON to connect to the server.

Run with `node`
```sh
export SERVER_ADDRESS=<server address>
export PORT=<RCON port>
export PASSWORD=<RCON password>
export DISCORD_URL=<Invite link to discord>
```

Run in `docker`

```sh
docker build . -t rust-chat
docker run -d \
-e SERVER_ADDRESS=<server address> \
-e PORT=<RCON port> \
-e PASSWORD=<RCON password> \
-e DISCORD_URL=<Invite link to discord> \
rust-chat
```

Or you can use docker-compose. Create a `.env` file in this directory
```sh
#.env file
SERVER_ADDRESS=<server address>
PORT=<RCON port>
PASSWORD=<RCON password>
DISCORD_URL=<Invite link to discord>
```

Then use `docker-compose up -d` to bring the bot online
