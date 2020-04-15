const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = 'tau ';
var embedcolor = 0x00FFFF;

const token = 'nope lmfao';

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
            .setColor(embedcolor)
            .setTitle('Help')
            .setURL('https://github.com/TechnicalUnsupport/taubot/blob/master/README.md')
            .setAuthor('TechnicalUnsupport','https://i.imgur.com/KENNHFY.jpg','https://github.com/TechnicalUnsupport/taubot')
            .setDescription('This is a list of commands, aswell as hyperlinks to the github for more help')
            .addFields(
                {name:'\u200B',value:'**Non-Prefix commands:**'},
                {name:'hello',value:'*makes bot say hello*'},
                {name:'\u200B',value:'**Prefix commands:**'},//title
                {name:'tau ign',value:"*provides tau's igns for minecraft and steam*", inline:true},//1
                {name:'tau gay',value:"*you'll see :)*",inline:true},//2
                {name:'tau ping',value:"*pings tau*",inline:true},//3
                {name:'\u200B',value:'\u200B'},
                {name:'tau msg [message]',value:"*makes the bot send a message*",inline:true},//1
                {name:'tau github',value:"*provides link to the Bot's GitHub*",inline:true},//2
                {name:'tau info',value:"*provides links to tau's youtube and twitch*",inline:true},//3
                {name:'\u200B',value:'\u200B'},
                {name:'tau games',value:'*list of bot games*',inline:true}
            )
            .setFooter('Prefix: "tau"')
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
            .setThumbnail('https://i.imgur.com/hDeh9N6.png')
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



        //games
        case 'games':
            const gembed = new MessageEmbed()
            .setColor(embedcolor)
            .setTitle('Games')
            .setDescription('here is a list of playable games that the bot has:')
            .addFields(
                {name:'tau roll[1-6]',value:'vs bot, highest value wins'}
            )
            .setFooter('more games will be made in future!')
            msg.channel.send(gembed)
            break;
        
        case 'roll'://dice
            var dicelist = ['1','2','3','4','5','6'];//dice array
            var dnr = Math.floor(Math.random()*dicelist.length);//dice 
            var botdnr = dicelist[dnr];//number dice lands on(bot's number)
            dwinner = 'n/a'//if no values are given,default
            if(args[1] > botdnr){//if player wins
                dwinner = '**Player**'
            }else if(args[1] < botdnr){//if bot wins
                dwinner = '**Bot**'
            }else if(args[1] === botdnr){//if it's a tie
                dwinner = '**Tie**'
            }

            var dembed = new MessageEmbed()//final message(outcome)
            .setColor(embedcolor)
            .setTitle('**Dice**')
            .addFields(
                {name:'Player:', value:args[1],inline:true},
                {name:'\u200B',value:'\u200B', inline:true},
                {name:'bot:',value:botdnr,inline:true},
                {name:'Winner:',value:dwinner}
            )

            msg.channel.send(dembed)
            break;

    }
})

bot.on('guildMemberAdd', member=>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-to-the-house")
    if(!channel) return;

    channel.send(`Welcome to the server, ${member}, please read the rules`)
});


bot.login(token);
