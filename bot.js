const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');




client.on("ready", () => {
    //console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores`);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);


    //console.log(client.guilds);
    var guild = client.guilds.get("TesteBot");
    //console.log(guild);





});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor, ${guild.name} (id: ${guild.id}. População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor, ${guild.name} (id: ${guild.id}`);
    client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);
});

let qtdeMessages = 0;

client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    var nomeAutor = message.author.username;

    if (comando.indexOf("<@406783079122993162>") ===0) {

        
        const m = await message.channel.send(`O que vc quer ${nomeAutor}? Ainda não temos previsão para seu Décimo!`);
        //message.channel.send('Mas vcs são chato hein!!!')

        message.channel.send(`O Carlos não quer falar com vc!`);
    }

    if(comando.indexOf('olá',0) === 0 || comando.indexOf('ola',0) === 0){
        message.channel.send(`Ola ${nomeAutor}`);
    }

    if(comando.indexOf('bot') === 0){
        message.channel.send(`O que você precisa ${nomeAutor}?`);
    }


    qtdeMessages = qtdeMessages+1;

    if(qtdeMessages >= 10)
    {
        message.channel.send('Estão com pouco Trabalho né. Não precisamos de você, vou te exonerar... HAHAHAHAHAAHAHAH');
        qtdeMessages = 0;
    }
    

});


client.login(config.token);

