import express from 'express';
import data from "./data.js";

const app= express();

app.get("/api/products", (req ,resp)=>{
    resp.send(data.products);
    
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

app.get("/" ,(req,resp) =>{
    resp.send("Server is ready always  up  ");
})
const port=process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})