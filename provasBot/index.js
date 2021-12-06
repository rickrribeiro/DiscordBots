var Discord = require("discord.js");
const client = new Discord.Client();
const db = require("./provas.json")
const env = require("./env.json")
const fs = require("fs")
//funcionalidades
client.on("ready", ()=>{
    
    const channelTest = client.channels.cache.get('895072262514941952');
    if(channelTest){
        channelTest.startTyping()
        channelTest.stopTyping()
       // channelTest.send('<@374270940185624578> Voltei! O que você manda?');
    }
    
})

const exam = require("./provaSO.json")
const questions = exam.questions
client.on("message", async msg =>{
    try{
        console.log(msg.content)
        
        if(msg.content.toLowerCase().includes("?ricardoehlindo help")){
            msg.reply(`\nUtilize o comando '?ricardoehlindo questoes' para listar as questoes ou "?ricardoehlindo questao numero" para ver a resposta!`)
        }else if(msg.content.toLowerCase().includes("?ricardoehlindo questoes")){
            //msg.reply(`\nCalma rpz ta com pressa é? Ainda nem começou a prova`)
            console.log("AAAAAAAA")
            msg.reply("\nLista de questões: ")
            for(let i =0; i< questions.length; i++){
                msg.reply("\n"+i+". "+ questions[i].statement)
            }
        }else if(msg.content.toLowerCase().includes('?ricardoehlindo questao')){
            const number = msg.content.toLowerCase().split('questao ')[1]
            msg.reply(`\n${questions[number].answer}`)
        }else if(msg.content.toLowerCase().includes('?ricardoehlindo')){
            msg.reply('\nNão entendi! Joga um ?ricardoehlindo help ai p ver como usar')
        }
        
    }catch(err){
        console.log(err)
    }
    })
    //end funcionalidades
    client.login(env.token)