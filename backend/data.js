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
        password: bcrypt.hashSync("1234",8),
        isAdmin:false,
        

      }
    ],
    products: [
      {
        _id: '1',
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
        _id: '2',
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 5200,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 12,
        countInStock:4,
        description: 'high quality product',
      },
      {
        _id: '3',
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 5400,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        countInStock:10,
        description: 'high quality product',
      },
      {
        _id: '4',
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 5400,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        countInStock:7,
        description: 'high quality product',
      },
     
      {
        _id: '5',
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/p5.jpg',
        price: 65,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 5,
        countInStock:0,
        description: 'high quality product',
      },
      {
        _id: '6',
        name: 'Ajay Patta',
        category: 'Pants',
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