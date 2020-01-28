const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjcxMDE1MTMzMzk2MzM2NzU5.Xi8vyg.jtu01medwHHXpix5RTTe3Y8PSug")
client.on("guildMemberAdd" , user =>{
    user.guild.channels.get("669617394032967716").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " !")
});

client.on("ready", () =>{
    console.log(`[INFO] ${client.user.username} | est bien connecté sur ${client.guilds.size} serveur `)
    console.log(`[INFO] ${client.user.username} Est bien connecté !`)   
    client.user.setGame("BOT : ON");
})

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "Hello"){
        message.channel.send("Bonjour !" + message.author + " !")
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "Help"){
        var help_embed = new Discord.RichEmbed()
        .setTitle( "•🌙 Voici les commandes 🌙•")
        .setDescription("**Make by Zeyco**")
        .addField("```Voici les commandes ---> !Commandes","```!Twitter```")
        .setColor("RANDOM")
    
        .addField("```Pour avoir un bot comme Zeyco BOT mp Zeyco```", "**Merci de le mp via Twitter ou Discord**")
        .setThumbnail("https://media.giphy.com/media/XLkaQLPfb0djy/giphy.gif")
        message.channel.send(help_embed);
    }
});



client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "Twitter"){
        var help_embed = new Discord.RichEmbed()
        .setTitle( "•🌙 Voici mon twitter 🌙•")
        .setDescription("**Make by Zeyco**")
        .addField("Voici mon Twitter ---> https://twitter.com/Zeyco20 ","**Cette commande que vous avez fait est : !Twitter**")
        .setColor("RANDOM")
    
        .addField("```Pour avoir un bot comme Zeyco BOT mp Zeyco```", "**Merci de le mp via Twitter ou Discord**")
        .setThumbnail("https://media.giphy.com/media/XLkaQLPfb0djy/giphy.gif")
        message.channel.send(help_embed);
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === "ça va ?"){
        message.channel.send("Je vais bien et toi ça va ?")
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === "Oui je vais bien"){
        message.channel.send("Ok bah parfait !" )
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === "ouai ?"){
        message.channel.send("Bah parfait moi aussi ?")
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === " ça va ?"){
        message.channel.send(" Je vais bien et toi ça va ? ")
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === " ouai trankil "){
        message.channel.send("bah parfait alors ?")
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "logo"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("•🌙 Voici mon logo 🌙•")
        .setDescription("**Make by Zeyco**")
        .addField("Voici mon logo ---> https://cdn.discordapp.com/avatars/668514939358674944/272f6d54add31c7751baee46ad222c95.png?size=2048","**Cette commande que vous avez fait est !logo**")
        .setColor("RANDOM")
    
        .addField("```Pour avoir un bot comme Zeyco BOT mp Zeyco```", "**Merci de le mp via Twitter ou Discord**")
        .setThumbnail("https://media.giphy.com/media/XLkaQLPfb0djy/giphy.gif")
        message.channel.send(help_embed);
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "Commandes"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("•🌙 Voici les Commandes 🌙•")
        .setDescription("**Make by Zeyco**")
        .addField("**Voici les commandes --> !Help !logo !Commandes !Twitter**","```Cette commandes que vous avez fait est : !Commandes```")
        .setColor("RANDOM")

        .addField("**Pour avoir un bot comme Zeyco BOT mp Zeyco```", "**Merci de le mp via Twitter ou Discord** ")
        .setThumbnail("https://media.giphy.com/media/XLkaQLPfb0djy/giphy.gif")
        message.channel.send(help_embed);
    }
});

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "Discord"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("•🌙 Voici le Discord 🌙•")
        .setDescription("**Make by Zeyco**")
        .addField("**Voici le Discord  --> https://discord.gg/vTQ7aRn **","Cette commande que avez fais est : !Discord")
        .setColor("RANDOM")

        .addField("```Pour avoir un bot comme Zeyco BOT mp Zeyco```", "**Merci de le mp via Twitter ou Discord**")
        .setThumbnail("https://media.giphy.com/media/XLkaQLPfb0djy/giphy.gif")
        message.channel.send(help_embed);
    }
});
