/*var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./spreadsheet_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1m_2EHN_sz68JjwTNkKnQddY5WySG_YWN2hzME9nTmoc');
var dkpList

var getDkp = () => doc.useServiceAccountAuth(creds, function (err) {
  dkpList = []
  // Get all of the rows from the spreadsheet.
   doc.getRows(1, function (err, rows) {
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
const creds = require('./spreadsheet_secret.json');

const SPREADSHEET_ID = ``
async function accessSpreadsheet() {
  dkpList = ["\n***DKPetas***"]
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
  await promisify(doc.useServiceAccountAuth)(creds)
  const info = await promisify(doc.getInfo)()
  
  const sheet = info.worksheets[0]
  const rows = await promisify(sheet.getRows)({
    offset: 0,
    limit: 999,
    orderby: 'col2'
})
rows.forEach(element => {
  dkpList.push(`${element.membro} - ${element.dkp}`)
 // console.log(dkpList)
});
 
  return dkpList

}
module.exports= {
  getDkp : accessSpreadsheet
}