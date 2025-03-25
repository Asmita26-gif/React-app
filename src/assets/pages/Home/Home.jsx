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




import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const FakeProductList = () => {
  const generateProducts = () => {
    return Array.from({ length: 5 }, () => ({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url({ width: 100, height: 100 }),
    }));
  };

  const [products, setProducts] = useState(generateProducts);

  const handleGenerateProducts = () => {
    setProducts(generateProducts());
  };

  return (
    <div>
      <h2>Fake Products</h2>
      <button onClick={handleGenerateProducts}>Generate New Products</button>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt="Product" width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeProductList;
