const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send("<center><h1>Hello World</h1></center>")
})

app.use(express.json());  //whatever val coming form user,it will take as json
const products = [
	{
		id:1,
		name:"Iphone"
	},
	{
		id:2,
		name:"Samsung"
	},
	{
		id:3,
		name:"Realme"
	}
]
app.get('/products',(req,res)=>{
	res.json(products)
})

app.get('/products/:id', (req,res)=>{
	const newData = products.filter(item=>item.id.toString() === req.params.id); //URL data string format //our data int
	return res.json(newData);
})

app.post('/addproducts', (req, res) => {
	const { id, name } = req.body;
	console.log(id, name);
	return res.send('Data Received..');
  });
  
app.listen(5000,()=>console.log("Server is Running..."))