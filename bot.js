const { Client, Intents } = require("discord.js");

const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES 
    ]
});
client.on("ready", () =>{
    console.log("The AI bot is online");
});


client.on("messageCreate", (message) => {
    if (message.content.substring(0, 1) === "!") {
        message.reply("Hello from AI bot");
    }
});

client.login("your TOKEN");

//prompt для запроса к GPT-3

// const prompt = message.content.substring(1); //Удаление восклицательного знака из сообщения 
// const answer = await ask(prompt); //Ответ GPT-3
// message.channel.send(answer); //Ответное сообщение в Discord с ответом  от GPT-3