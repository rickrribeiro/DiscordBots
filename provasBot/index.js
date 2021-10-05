var Discord = require("discord.js");
const client = new Discord.Client();
const db = require("./provas.json")
//funcionalidades
client.on("ready", ()=>{
    
    const channelTest = client.channels.cache.get('895072262514941952');
    if(channelTest){
        channelTest.startTyping()
        channelTest.stopTyping()
       // channelTest.send('Estou preparado!');
    }
    
})


client.on("message", async msg =>{
    
    if(msg.content.toLowerCase() == "?prova comandos"){
        msg.reply(`\nEm desenvolvimento`)
    }
    else if(msg.content.toLowerCase() == "?prova lista"){
        let str='';
        let i;
        db.exams.forEach((el, i)=>{
            str+=`\n${i+1}. ${el.name}`
        })
        msg.reply(str)
    }else if(msg.content.toLowerCase().includes("?prova adicionar")){
        let name = msg.content.toLowerCase().split("?prova adicionar")[1]
        if(name){
            db.exams.push({name:name})
            console.log(db)
            msg.reply("Prova adicionada")
        }else{
            msg.reply("Utilize o comando no formato \"prova adicionar {nome da prova}\"")
        }
    }
})
//end funcionalidades
client.login("")