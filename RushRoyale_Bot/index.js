var Discord = require("discord.js");

const client = new Discord.Client();

//funcionalidades
client.on("ready", ()=>{
    
    const channel = client.channels.cache.get('854146917340938260');
    channel.startTyping()
    channel.stopTyping()
    channel.send('Eai galera, prontos para matar um NC?');
    
})


client.on("message", async msg =>{
   // msg.channel.startTyping();
    
    //verifica se chamou o bot pra n floodar
    if(msg.content.toLowerCase().includes("xama?") && msg.author.tag != client.user.tag){ 
        
        //mostra o melhor druida
        
        // mostra o DKP
        if(msg.content.toLowerCase().includes("coop ranking")){
            msg.channel.startTyping()
            msg.channel.stopTyping()
         
            msg.reply(`\n1.NoM_ComeCuDeNC - 103`)
            
        }
         

    }
    
    if(msg.content.toLowerCase() == "xama ajuda"){

     
        msg.reply(`Em desenvolvimento!`)
    }

    if(msg.content.toLowerCase() == "xama comandos"){

     
        msg.reply(`\n1. coop ranking`)
    }
  
})
//end funcionalidades
client.login("")