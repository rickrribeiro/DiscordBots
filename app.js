var Discord = require("discord.js");

const client = new Discord.Client();

//funcionalidades
client.on("ready", ()=>{
    //console.log(`${client.user.tag} chegou!`)
    console.log("Corram que o RickBahia ta chegando!")
})

client.on("message", msg =>{
    if(msg.content.toLowerCase().includes("rick,")){
        if(msg.content.toLowerCase().includes("melhor druida")){
            var gerado = Math.floor((Math.random() * 10) + 1)
            if(gerado == 1 || gerado == 2 || gerado == 3){
                msg.reply("Você ainda tem duvidas que não é o Grande Rickbahia!?!?!?")
            }else  if(gerado == 4 || gerado == 5 || gerado == 6){
                msg.reply("É obvio que é o Rickbahia!!")
            }else  if(gerado == 7 || gerado == 8 || gerado == 9){
                msg.reply("Trouer?Mastersan?Magalzera? Sai dai! O Rickbahia é o Deus!")
            }else if(gerado == 10){
                msg.reply("Rickbahia é o rei dos druidas!")
            }
            
        }
    


    }

    if(msg.content.toLowerCase() == "rick?"){
        msg.reply(`Eai noobs! Para eu não ficar floodando o chat, antes de cada mensagem coloque "Rick," e faça sua pergunta!
                    1.Melhor druida
                    2.DKP
                    3.Builds
                    4.Addons
                    5.Horarios
                    6.Avisos
                    7.Nudes`)
    }

   
  // console.log(msg.content.toLowerCase())
})
//end funcionalidades
client.login("quer oq aqui otario?")