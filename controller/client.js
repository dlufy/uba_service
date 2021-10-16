const Client = require("../model/client")

 InsertClientData = async (req, res) => {
    console.log('POST request to the homepage')
    console.log(req.body)
   const client = new Client(req.body)
  
   try {
    const resData = await client.save()
    res.send({"message":"all good"})
   }catch(e){
      res.send({"message":e})
   }
  }

  const ClientItr = {InsertClientData}
  module.exports = ClientItr