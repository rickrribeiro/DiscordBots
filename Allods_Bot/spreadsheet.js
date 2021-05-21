/*var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./spreadsheet_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var docDKP = new GoogleSpreadsheet('1m_2EHN_sz68JjwTNkKnQddY5WySG_YWN2hzME9nTmoc');
var dkpList

var getDkp = () => docDKP.useServiceAccountAuth(creds, function (err) {
  dkpList = []
  // Get all of the rows from the spreadsheet.
   docDKP.getRows(1, function (err, rows) {
    rows.forEach(element => {
      dkpList.push(`${element.membro} - ${element.dkp}`)
     // console.log(dkpList)
    });
    console.log(a)
  });
  console.log(dkpList)
}); */
const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
var dkpList
var avisosList
var horariosList
const creds = require('./spreadsheet_secret.json');

const spreadsheetDKP_secret = `1iZvX4AtrM-PElzhjyqTIwAfxzK1TC75sK3EXgD_jvso`
const spreadsheetTextos_secret = `1TpSJK0zaDoaNDTsVORd7kvwDOBQoVq-_2doeOM3Wr_Y`

async function getDkp(alfabetica) {
  dkpList = ["\n***DKPetas***"]
  const docDKP = new GoogleSpreadsheet(spreadsheetDKP_secret)
  await promisify(docDKP.useServiceAccountAuth)(creds)
  const info = await promisify(docDKP.getInfo)()
  console.log("aqqqqqqqq")
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999,
    orderby: 'col2'
  })
  if(alfabetica){
    rows.sort((a, b) => (a.membro > b.membro) ? 1 : -1)
  }else{
    rows.sort((a, b) => (parseInt(a.dkp) < parseInt(b.dkp)) ? 1 : -1)
  }
  
  rows.forEach(element => {
    if(element.membro.length>0){
      dkpList.push(`${element.membro} - ${element.dkp}`)
    
    }
    
  // console.log(dkpList)
  });
  
  return dkpList

}

async function getDkpPlayer(name) {
 console.log("aqq")
  const docDKP = new GoogleSpreadsheet(spreadsheetDKP_secret)
  await promisify(docDKP.useServiceAccountAuth)(creds)
  const info = await promisify(docDKP.getInfo)()
  
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999,
    orderby: 'col2'
  })
  var aux = "Player não encontrado!"
  rows.forEach(element => {
    
    if(element.membro.toLowerCase() == name.toLowerCase()){
      
      aux= `${element.membro} - ${element.dkp}`
    
    }
    
  // console.log(dkpList)
  });
  
  return aux
}

async function getAvisos() {
 avisosList = ["\n***Avisos***"]
  const docTextos = new GoogleSpreadsheet(spreadsheetTextos_secret)
  await promisify(docTextos.useServiceAccountAuth)(creds)
  const info = await promisify(docTextos.getInfo)()
  
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999
    //orderby: 'col2'
  })
  var i=1;
  rows.forEach(element => {
    if(element.horarios.length>0){
      avisosList.push(`${i}.${element.avisos}`)
      i++;
    }
   //console.log(element)
  });
  
  return avisosList

}
async function getHorarios(){
  horariosList = ["\n***Horários***"]
  const docTextos = new GoogleSpreadsheet(spreadsheetTextos_secret)
  await promisify(docTextos.useServiceAccountAuth)(creds)
  const info = await promisify(docTextos.getInfo)()
  
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999
    //orderby: 'col2'
  })
  var i=1;
  rows.forEach(element => {
    if(element.horarios.length>0){
      horariosList.push(`${i}.${element.horarios}`)
      i++;
    }
    
   //console.log(element)
  });
  
  return horariosList

}

async function Solicitar(solicitacao){
  const docTextos = new GoogleSpreadsheet(spreadsheetTextos_secret)
  await promisify(docTextos.useServiceAccountAuth)(creds)
  const info = await promisify(docTextos.getInfo)()
  var feita = false
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999
    //orderby: 'col2'
  })
  
  //sheet.insertRowsAfter(sheet.getMaxRows(), 1);
  //sheet.appendRow(['That Row']);
  //console.log(rows[1])
  // update a value
 
  for(var i=0; i<30;i++){
    
    //console.log(rows[i])
   
    console.log(rows.length-1)
    
      
    if(rows[i]==undefined){
      console.log("entrou")
      feita = true
      await sheet.addRow({ solicitacoes: solicitacao });
      break;
    }
    else if(rows[i] && rows[i].solicitacoes.length==0){
      console.log("entrou2")
      feita = true
      rows[i].solicitacoes = solicitacao; 
      await rows[i].save();
      break;
    }
  }
   // save updates
  return feita

}
module.exports= {
  getDkp : getDkp,
  getAvisos:getAvisos,
  getHorarios: getHorarios,
  Solicitar:Solicitar,
  getDkpPlayer:getDkpPlayer
}