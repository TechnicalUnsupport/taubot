const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = 'tau ';
var embedcolor = 0x00FFFF;

const token = 'get rekt noob';

bot.on('ready', () =>{
    console.log('bot online');
})

const { Client, MessageEmbed } = require('discord.js');
//hello
bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.channel.send('hewo uwu');
    }
 }
)
bot.on('message', msg=>{

    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ign':
            const ign = new MessageEmbed()
            .setColor(embedcolor)
            .addField('Minecraft:','n/a')
            .addField('Steam','n/a')
            msg.channel.send(ign);
            break;
        case 'help':
            const help = new MessageEmbed()
            .setColor(embedcolor)
            .addField('tau ign',"gives tau's igns")
            .addField('tau gay',"you'll see :)")
            .addField('tau ping','pings tau')
            msg.channel.send(help);
            break;
        case 'gay':
            msg.channel.send('VERY GAY :Afrigay:')
            break;
        case 'ping':
            msg.reply('lol thought you would ping tau?')
            break;
    }
})






bot.login(token);
