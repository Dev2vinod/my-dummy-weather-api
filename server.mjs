console.log("hello ji ")
import express from 'express';
import cors from "cors";
import path from "path";
const __dirname = path.resolve();
const app = express();
app.use(express.json());// body parser
const PORT =process.env.PORT|| 3000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send(' i am login page')
})

//  app.use((res,req,next)=>{
//   let token ="valid"
//   if(token ==="valid"){
//     next();
//   }else{
//     res.send({message:"invalid token "})
//   }
//  })

  // GET /api/v1/post/:userId/:postId
 app.post('/signup', (req, res) => {
  res.send('post created')
})


app.get('/weather/:cityName', (req, res) => {

   let weatherData ={
    india:{

      city:"india",
      temp:"23f",
      wind:"23km",
      date: new Date(),
      height:"34m"
    },
    bharat:{
      city:"bharat",
      temp:"2f",
      wind:"2km"
    }

   }

   let userInputCityName =req.params.cityName.toLowerCase();
  
   let weatherDataToSend =weatherData[userInputCityName]

   if (weatherDataToSend) {
    res.send(weatherDataToSend)
    
   } else{
    res.status(404).send("invalid city name ")
   }

  
})

 


app.use('/static', express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`runnisng in my terminal  ${PORT}`)
})