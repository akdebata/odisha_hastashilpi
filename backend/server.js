import express from 'express';
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from './routers/userRouter.js';

const app= express();
mongoose.connect(process.env.MONGODB || "mongodb://localhost/odishahastashilpi" , {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
    debugger;
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get("/api/products", (req ,resp)=>{
    resp.send(data.products);
    
})

app.use('/api/users', userRouter)

app.get("/" ,(req,resp) =>{
    resp.send("Server is ready always  up  ");
})

app.use((err, req , res,next) =>{
  res.status(500).send({message : err.message})
})
const port=process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})