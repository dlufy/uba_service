var express = require('express')
const  ClientCtr = require("../controller/client")
const  UBACtr  = require("../controller/uba")
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
})

router.get("/",(req,res)=>{
    res.send({
    "message":"welcome to hello world"
    })
  })

// define the about route
router.get('/about', function (req, res) {
  res.send('About Us')
})

router.post('/client', async (req,res)=> {
    await ClientCtr.InsertClientData(req,res)
})
  router.post("/ubaEvent",async (req,res) => {
      await UBACtr.InsertEventData(req,res)
  })
module.exports = router