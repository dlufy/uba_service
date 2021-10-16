const UbaEvent = require("../model/uba")
InsertEventData = async (req,res) => {
    console.log("we got uba event",req.body)
    const Event = new UbaEvent(req.body)
    try {
      Event.save()
      res.send({"message":"success"})
    }catch(e){
      console.log("error while saving the UBA event data",e)
      res.send({"message":e})
    }
  }
const UBACtr = {InsertEventData}
module.exports = UBACtr