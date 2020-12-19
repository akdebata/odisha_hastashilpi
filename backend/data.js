import bcrypt from "bcryptjs";
const data = {
    users:[
      {
        name:"Ajay Debata ",
        email: "Ajaydebata@gmail.com",
        password: bcrypt.hashSync("1234",8),
        isAdmin:true,


      },
      {
        name:"Akhil Debata ",
        email: "Akhildebata@gmail.com",
        password: bcrypt.hashSync("1235",8),
        isAdmin:false,
        

      }
    ],
    products: [
      {
       
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 1250,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 30,
        countInStock:4,
        description: 'high quality product',
      },
      {
        
        name: 'Adidas Fit Shirt 1',
        category: 'Shirts1',
        image: '/images/p2.jpg',
        price: 5200,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 12,
        countInStock:4,
        description: 'high quality product',
      },
      {
       
        name: 'Lacoste Free Shirt 2',
        category: 'Shirts2',
        image: '/images/p3.jpg',
        price: 5400,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        countInStock:10,
        description: 'high quality product',
      },
      {
        
        name: 'Nike Slim Pant 3',
        category: 'Pants3',
        image: '/images/p4.jpg',
        price: 5400,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        countInStock:7,
        description: 'high quality product',
      },
     
      {
        
        name: 'Puma Slim Pant 4',
        category: 'Pants4',
        image: '/images/p5.jpg',
        price: 65,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 5,
        countInStock:0,
        description: 'high quality product',
      },
      {
       
        name: 'Ajay Patta 5',
        category: 'Pants5',
        image: '/images/p4.jpg',
        price: 5400,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        countInStock:7,
        description: 'high quality product',
      }
    ],
  };
  export default data; 