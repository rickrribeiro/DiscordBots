var Discord = require("discord.js");
var Sheets = require("./spreadsheet")
const client = new Discord.Client();

//funcionalidades
client.on("ready", ()=>{
    //console.log(`${client.user.tag} chegou!`)
    //client.channels ('717622566633603081').sendMessage()
    //client.channels.get('717622566633603081').send('Hello here!')
    
    const channel = client.channels.cache.get('717622566633603081');
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
         
           if(msg.content.toLowerCase().includes("alfa")){
            console.log("1")
            msg.reply(await Sheets.getDkp(true))
           }else{
            var aux= msg.content.toLowerCase().split("dkp")
            console.log(aux)
            if(aux[1].length<4){
                console.log("2")
                msg.reply(await Sheets.getDkp(false))
            }else{
                console.log("3")
               // console.log(await Sheets.getDkpPlayer(aux[1].trim()))
                msg.reply(await Sheets.getDkpPlayer(aux[1].trim()))
            }
           
           }
            
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
        if(msg.content.toLowerCase().includes("addons") && !msg.content.toLowerCase().includes("sug") ){
            msg.reply("\nTa apressado pra que? To fazendo isso sozinho. Se vesgo mandar cash eu faço mais rapido!")
        }
        //avisos
        if(msg.content.toLowerCase().includes("avisos")){
            msg.channel.startTyping()
            msg.channel.stopTyping()
            //msg.reply("\nEnviem 5kc para o RickBahia")
            msg.reply(await Sheets.getAvisos())
        }
        //horarios
        if(msg.content.toLowerCase().includes("horarios")){
            msg.channel.startTyping()
            msg.channel.stopTyping()
            
            msg.reply(await Sheets.getHorarios())
            //msg.reply("\n\nDominio Domingos 20 às 20 horas!")
        }
        //tutoriais
        if(msg.content.toLowerCase().includes("tutoriais")){
           
            msg.reply("\nTa apressado pra que? To fazendo isso sozinho. Se vesgo mandar cash eu faço mais rapido!")
        }
        //nudes
        if(msg.content.toLowerCase().includes("nudes")){
           
            msg.reply("\nQuer foto da minha rola é???\nManda cash ai que eu mando!")
        }
        
        if(msg.content.toLowerCase().includes("sugaddons")){
           var aux= msg.content.toLowerCase().split("sugaddons")
           var verify =false
          if(aux[1].length > 4){
               verify = await Sheets.Solicitar(aux[1])
          }else{
              msg.reply("Digite após sugaddons")
          }
          if(verify){
              msg.reply("Solicitação feita com sucesso!")
          }else{
              msg.reply("Erro na Solicitação!")
          }
        }
        
        
        if(msg.content.toLowerCase().includes("sugbuild")){
            var aux= msg.content.toLowerCase().split("sugbuild")
            var verify =false
           if(aux[1].length > 4){
                verify = await Sheets.Solicitar(aux[1])
           }else{
               msg.reply("Digite após sugbuild")
           }
           if(verify){
               msg.reply("Solicitação feita com sucesso!")
           }else{
               msg.reply("Erro na Solicitação!")
           }
         }
         

    }
    
    if(msg.content.toLowerCase() == "rick?"){

     
        msg.reply(`Eai noobs! Para eu não ficar floodando o chat, antes de cada mensagem coloque "Rick" e faça sua pergunta!
                    1.Melhor druida
                    2.DKP (Ordenado pela quantidade- adicionar "alfa" no final pra ir por ordem alfabética)
                    3.Build "NomeDaClasse"
                    4.Addons
                    5.Horarios
                    6.Avisos
                    7.Tutoriais
                    8.SugAddons "link-descrição"
                    9.SugBuild "link-descrição"
                    69.Nudes
                    Temporariamente irei deixar o "sugAddons" e "sugBuild" pra galera enviar e preencher. Envia no formato link-descrição ex: rick sugaddons https://allodsmaniacs.com-SiteAllods`)
    }

   // 8.Solicitacoes "solicitação aqui" (Denuncias, Solicitações ou Sugestões)
  // console.log(msg.content.toLowerCase())
  
})
//end funcionalidades
client.login("")