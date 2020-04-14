const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = 'tau ';
var embedcolor = 0x00FFFF;

const token = 'TOP SECRET';

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
            .addField('Minecraft:','Just_Tau')
            .addField('Steam','Tau')
            msg.channel.send(ign);
            break;
        case 'help':
            const help = new MessageEmbed()
            .setTitle('Help')
            .setDescription('list of commands')
            .setColor(embedcolor)
            .addField('tau ign',"gives tau's igns")
            .addField('tau gay',"you'll see :)")
            .addField('tau ping','pings tau')
            .addField('tau msg','anyhing past msg will be sent by the bot(command message will be deleted)')
            .addField('tau github',"will link to the bot's github page")
            .addField('tau info', "links to tau's youtube channel and twitch")
            msg.channel.send(help);
            break;
        case 'gay':
            msg.channel.send('VERY GAY :rainbow_flag:')
            break;
        case 'ping':
            msg.reply('lol thought you would ping tau?')
            break;
        case 'msg':
            msg.delete()
            msg.channel.send(args.join(' ').slice(3))
            break;
        case 'github':
            const gh = new MessageEmbed()
            .setTitle('Github')
            .setURL('https://github.com/TechnicalUnsupport/taubot')
            .setColor(embedcolor)
            msg.channel.send(gh)
            break;
        case 'info':
            const I = new MessageEmbed()
            .setTitle('Info')
            .setColor(embedcolor)
            .addField('Youtube','https://www.youtube.com/channel/UC8e7qlj7-9Up6Jz7zTblt7A/about')
            .addField('Twitch','https://www.twitch.tv/justtau')
            msg.channel.send(I)
            break;
    }
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-to-the-house")
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}, please read the rules`)
});


bot.login(token);
