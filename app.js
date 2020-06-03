var Discord = require("discord.js");
var Dkp = require("./spreadsheet")
const client = new Discord.Client();

//funcionalidades
client.on("ready", ()=>{
    //console.log(`${client.user.tag} chegou!`)
    //client.channels ('717622566633603081').sendMessage()
    //client.channels.get('717622566633603081').send('Hello here!')
    
    const channel = client.channels.cache.get('');
    channel.startTyping()
    channel.stopTyping()
    channel.send('Corram que o RickBahia ta chegando!');
    
})


client.on("message", async msg =>{
   // msg.channel.startTyping();
    
    //verifica se chamou o bot pra n floodar
    if(msg.content.toLowerCase().includes("rick") && msg.author.tag != client.user.tag){ 
        
        //mostra o melhor druida
        if(msg.content.toLowerCase().includes("melhor druida")){
          
            var gerado = Math.floor((Math.random() * 10) + 1)
            if(gerado == 1 || gerado == 2 || gerado == 3){
                msg.reply("Você ainda tem duvidas que não é o Grande Rickbahia!?!?!?")
            }else  if(gerado == 4 || gerado == 5 || gerado == 6){
                msg.reply("É obvio que é o Rickbahia!!")
            }else  if(gerado == 7 || gerado == 8 || gerado == 9){
                msg.reply("Trouer?Mastersan?BANgalzera? Sai dai! O Rickbahia é o Deus!")
            }else if(gerado == 10){
                msg.reply("Rickbahia é o rei dos druidas!")
            }
            
        }
        // mostra o DKP
        if(msg.content.toLowerCase().includes("dkp")){
            msg.channel.startTyping()
            msg.channel.stopTyping()
            //console.log(Dkp.getDkp())
            //console.log(await Dkp.getDkp())
            //console.log(await Dkp.getDkpTest())
           // msg.reply(Dkp.getDkp())
            msg.reply(await Dkp.getDkp())
        }
        //mostra as build
        if(msg.content.toLowerCase().includes("build")){
          
            if(msg.content.toLowerCase().includes("druida") || msg.content.toLowerCase().includes("xama")){
                msg.reply(`PVP - https://allodsmaniacs.com/calculadora/#d/oug76wzch:znlvup:18cigxdy1l71xf:t3h4sk2yl::b8jj:
                       PVE - https://allodsmaniacs.com/calculadora/#d/66q76exoe:znlsox:1cggc7updy93:oy14wrd2bh::b8jj:`)
            }
            else if(msg.content.toLowerCase().includes("bardo") || msg.content.toLowerCase().includes("outro nome de bardo")){
                msg.reply(`PVP-
                       PVE- `)
            }
        }
        //mostra addons
        if(msg.content.toLowerCase().includes("addons")){
          
            msg.reply("\nTa apressado pra que? To fazendo isso sozinho. Se vesgo mandar cash eu faço mais rapido!")
        }
        //avisos
        if(msg.content.toLowerCase().includes("avisos")){
           
            msg.reply("\nEnviem 5kc para o RickBahia")
        }
        //horarios
        if(msg.content.toLowerCase().includes("horarios")){
         
            msg.reply("\nSarn quarta 05/06 às 19 horas!\nDominio Domingo 20 às 20 horas!")
        }
        //tutoriais
        if(msg.content.toLowerCase().includes("tutoriais")){
           
            msg.reply("\nTa apressado pra que? To fazendo isso sozinho. Se vesgo mandar cash eu faço mais rapido!")
        }
        //nudes
        if(msg.content.toLowerCase().includes("nudes")){
           
            msg.reply("\nQuer foto da minha rola é???\nManda cash ai que eu mando!")
        }
        


    }
    
    if(msg.content.toLowerCase() == "rick?"){

     
        msg.reply(`Eai noobs! Para eu não ficar floodando o chat, antes de cada mensagem coloque "Rick" e faça sua pergunta!
                    1.Melhor druida
                    2.DKP
                    3.Build NomeDaClasse
                    4.Addons
                    5.Horarios
                    6.Avisos
                    7.Tutoriais
                    69.Nudes`)
    }

   
  // console.log(msg.content.toLowerCase())
  
})
//end funcionalidades
client.login("NzE2MzgzMzIwNjY1MDk2MjMz.XtLA3A.A-dqz8L3HvdnFRUB8B-2U0Mq1yY")