const { Client } = require("rustrcon")

const rcon = new Client({
	ip: process.env.SERVER_ADDRESS,
	port: process.env.PORT,
	password: process.env.PASSWORD
});

rcon.login();

rcon.on('connected', () => {
	console.log(`Connected to ${rcon.ws.ip}:${rcon.ws.port}`);

	// Message, Name, Identifier.
	// rcon.send('serverinfo', 'Artful', 10);
	rcon.send('say Connected to chat', 10);

});

rcon.on('error', err => {
	console.error(err);
});

rcon.on('disconnect', () => {
	console.log('Disconnected from RCON websocket');
});

rcon.on('message', message => {
	messageHandler(message);
});


const messageHandler = (message) => {
	switch (message.Type) {
		case 'Chat':
			chatHandler(message)
	}
}

const chatHandler = (message) => {
	const parsedMessage = message.content.Message.match(/^!(?<command>\w+) *(?<rest>.*)/);
	const command = parsedMessage?.groups.command
	const rest = parsedMessage?.groups.rest
	console.log(command, rest)
	if (!command) return
	commandHandler(command, rest)
}

const commandHandler = (command, params) => {
	switch (command) {
		case 'help':
			printHelp()
			break;
		case "discord":
			globalMessage(process.env.DISCORD_URL)
			break;
		default:
			globalMessage(`Unknown command ${command}\n type !help for a list of commands`)
	}
}

const globalMessage = (message) => {
	rcon.send(`say ${message}`)

}

const printHelp = () => {
	globalMessage("Available commands:\nhelp\ndiscord\nmods")
}
