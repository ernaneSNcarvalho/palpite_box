import { GoogleSpreadsheet } from "google-spreadsheet"
import credentials from "../../credentials.json"

const doc = new GoogleSpreadsheet(
  "1ieTUEtcdPPVF0-vgiD7eV-7jeRcBVtiqCkLBjMsHUTo"
);

export default async(req, res) => {
    
try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    await sheet.addRow({
        Nome: data.Nome, 
        Email: data.Email, 
        Whatsapp: data.Whatapp,
        Cupom: 'a223d6d',
        Promo: 'çflakçdflak'
    })
    res.end(req.body)
    }catch(err){
    console.log(err)
    res.end('error')
    }
   
   
}