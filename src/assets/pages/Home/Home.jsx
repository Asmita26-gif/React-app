// import React from 'react'
// import { FiTool } from 'react-icons/fi'



// export default function Home() {
//   return (
//     <div className='grid grid-cols-[1fr_1fr] items-center justify-items-center min-h-screen px-6 backdrop-blur-3xl'>
//       <div className='lg:w-1/2 space-y-6'>
//         <div className='w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full'>
//           <span><FiTool className='mr-2' /></span>

//         </div>
//         <h1 className='text-5xl font-bold'>Real time problem</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit architecto cum magnam, libero, et eaque accusamus, quidem illo corporis sint voluptate dolore aut veniam eius quae? Error, assumenda perspiciatis?</p>

//       </div>
//     </div >
//   )
// }






//import React from 'react'
//import Header from '../../../components/Header'
//import { NavLink, Outlet } from 'react-router'
//import Intro from './Intro'

//import Tech from './Tech'
//import Info from './Info'
//import Footer from './Footer'


//export default function Home() {
// return (
// <div>


{/* <div className='h-200px w-[200px] border-2 border-amber-300 animate-myAni'>
        <h1>hello</h1>
      </div> */}



// <Intro />
// <Tech />
// <Info />
// <Footer />



// </div>
//)
//}




//import { faker } from '@faker-js/faker';

//const FakeUser = () => {
//const user = {
// name: faker.person.fullName(),
// email: faker.internet.email(),
// avatar: faker.image.avatar(),
//};

//console.log(user);

//return (
//  <div>
//    <h2>{user.name}</h2>
//   <p>{user.email}</p>
//   <img src={user.avatar} alt="User Avatar" />


//  </div>
// );
//};

//export default FakeUser;







// import { faker } from '@faker-js/faker';
// import { useState } from 'react';

// const FakeUserGenerator = () => {
//   const generateUser = () => ({
//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//   });

//   const [user, setUser] = useState(generateUser());

//   return (
//     <div>
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//       <img src={user.avatar} alt="User Avatar" />

//       <br />
//       <button onClick={() => setUser(generateUser())}>Generate New User</button>
//     </div>
//   );
// };

// export default FakeUserGenerator;




// import React, { useState } from 'react';
// import { faker } from '@faker-js/faker';

// const FakeProductList = () => {
//   const generateProducts = () => {
//     return Array.from({ length: 5 }, () => ({
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       image: faker.image.url({ width: 100, height: 100 }),
//     }));
//   };

//   const [products, setProducts] = useState(generateProducts);

//   const handleGenerateProducts = () => {
//     setProducts(generateProducts());
//   };

//   return (
//     <div>
//       <h2>Fake Products</h2>
//       <button onClick={handleGenerateProducts}>Generate New Products</button>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index} style={{ marginBottom: '20px' }}>
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <img src={product.image} alt="Product" width="100" />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FakeProductList;




import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Image, Shimmer } from 'react-shimmer';


// const response= axios.get('https://weatherapi-com.p.rapidapi.com/alerts.json',
//   {
//   headers:{
//     'x-rapidapi-key': '282cc3fef5msh2973f3f990c669ep137496jsnbc08f97f443a',
//   },
//   params: {
//     q:'27.7012231,85.3186019'
//   }
// });


// const getData = async()=>{
//   try{
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(response.data);

//   }catch(err){
//     console.log(err);

//   }
// }
// useEffect(() => {
//   getData();
//   console.log('hello');
// }, []);

// console.log('hello world');


export default function Home() {
  const nav = useNavigate();

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);



  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);

    }

  }



  useEffect(() => {
    getData();

  }, []);

  if (load) {
    return <h1>Loading......</h1>
  }



  console.log(data);


  return (

    <div className='grid grid-cols-4 gap-5 p-5'>




      {data && data.categories.map((cata) => {
        return <div
          className='cursor-pointer'
          onClick={() => nav(`/category-items/${cata.strCategory}`)}
          key={cata.idCategory}>
          <h1>{cata.strCategory}</h1>
          <img src={cata.strCategoryThumb} alt=""

          />
          <p className='line-clamp-5'>{cata.strCategoryDescription}</p>

        </div>
      })}



    </div>
  )
}

