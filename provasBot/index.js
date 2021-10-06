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
       // channelTest.send('Estou preparado!');
    }
    
})


client.on("message", async msg =>{
    
    if(msg.content.toLowerCase() == "?prova comandos"){
        msg.reply(`\nEm desenvolvimento`)
    }
    else if(msg.content.toLowerCase() == "?prova lista"){
        let str='';
  
        db.exams.forEach((el, i)=>{
            str+=`\n${i+1}. ${el.name}`
        })
        msg.reply(str)
    }else if(msg.content.toLowerCase().includes("?prova adicionar")){
        try{

            let name = msg.content.toLowerCase().split("?prova adicionar ")[1]
            if(name){
                db.exams.push({name:name,questions:[]})
                fs.writeFile('./provas.json', JSON.stringify(db), (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Salvou");
                });
                msg.reply("Prova adicionada")
            }else{
                msg.reply("Utilize o comando no formato \"prova adicionar {nome da prova}\"")
            }
        }catch(err){
            console.log(err);
            msg.reply("Deu erro! Fale com rickrribeiro p saber ql foi")
        }
    }else if(msg.content.toLowerCase().includes("?prova questoes")){
        try{
            
            let name = msg.content.toLowerCase().split("?prova questoes ")[1].split(" ")[0]
            
            
            let exam;
            if(name){
                exam = db.exams.find(el => el.name==name)
                
                let str='';
            }else{
                msg.reply("Utilize o comando no formato \"prova questoes {nome da prova}\"")
            }
            if(exam && msg.content.toLowerCase().includes("adicionar")){
                exam.questions.push({name: "aaaaaaaaaaaaaaaaa"})
                fs.writeFile('./provas.json', JSON.stringify(db), (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Salvou");
                });
                msg.reply("Salvou!")
            }else{
                
               if(exam){   
                   let str=''
                   exam.questions.forEach((el, i)=>{
                       str+=`\n${i+1}. ${el.name}`
                    })
                    if(str!=''){
                        msg.reply(str)
                    }else{
                        msg.reply("Nenhuma questão adicionada!")
                    }
                }else{
                    msg.reply("Prova nao encontrada!")
                }
                    
            }
        }catch(err){
            console.log(err)
            msg.reply("Não entendi! Utilize o comando help para saber mais!")
        }
            
        }
        
        
        
        
    })
    //end funcionalidades
    client.login(env.token)