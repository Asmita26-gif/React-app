import React from 'react'
import Home from './assets/pages/Home/Home';
import About from './assets/pages/About/About';
import Contact from './assets/pages/Contact/Contact';
// import { post } from './data'
// import PostCard from './components/PostCard'
import { createBrowserRouter, RouterProvider } from 'react-router'
// import Page1 from './assets/pages/Home/nested-pages/Page1';
// import Page2 from './assets/pages/Home/nested-pages/Page2';
import RootLayout from './components/RootLayout';
import Categoryitems from './assets/pages/Category_items/Categoryitems';
import ItemsDetails from './assets/pages/Items-details/ItemsDetails';
// import NotFound from './assets/pages/NotFound';
// import MyComponent from './components/MyComponent';




export default function App() {

  const router = createBrowserRouter([
    {
      // path: '/',
      // element: <MyComponent />


      path: '/',
      element: <RootLayout />,
      children: [
        {

          index: 'true',
          element: <Home />,
        },

        {

          path: 'category-items/:label',
          element: <Categoryitems />,
        },


        {

          path: 'items-details/:id',
          element: <ItemsDetails />,
        },







        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },



      ]
    },







  ]);


  return <RouterProvider router={router} />


  // let person = {
  //   name: 'ram'
  // };

  // let age = 100


  // const movie = {
  //   Title: "The Godfather",
  //   Year: "1972",
  //   Rated: "R",
  //   Released: "24 Mar 1972",
  //   Runtime: "175 min",
  //   Genre: "Crime, Drama",
  //   Director: "Francis Ford Coppola",
  //   Writer: "Mario Puzo, Francis Ford Coppola",
  //   Actors: "Marlon Brando, Al Pacino, James Caan",
  //   Plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
  //   Language: "English, Italian, Latin",
  //   Country: "United States",
  //   Awards: "Won 3 Oscars. 31 wins & 30 nominations total",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  // };
  // const person = 'hello';
  // const age = 90;
  // const isLogin = true;
  // const detail = 'he is a good person';
  // const per = {
  //   name: 'ram',
  //   habits: []
  // };
  // const numbers = [11, 12, 23, 34];


  return (
    <div className='flex flex-col min-h-screen' >
      <div className='flex-grow'></div>

      {/* {post.map((post) => {
        return <PostCard key={post.id} post={post} />
      })} */}




      {/* <h1>{person?.name}</h1>
      <h1>{age ?? .100}</h1> */}


      {/* <h1>{person}</h1>
      <p>{`${person} is ${age}years old`}</p>

      <body className='flex items-center justify-center min-h-screen bg-gray-100'>

        <div className='h-250px w-350px border-2 overflow-hidden rounded-lg showdow-md bg-white'>
          <img className='h-100px w-full object-contain' src={movie.Poster} alt="" />
          <div className=' bg-amber-200 fill-red-700'>
            <h1 className='font-bold font-stretch-75% text-red-700'>"The God Father"</h1>

            <p><strong>Year:</strong>.{movie.Year}</p>
            <p><strong>Rated:</strong>.{movie.Rated}</p>
            <p><strong>Runtime:</strong>.{movie.Runtime}</p>
            <p><strong>Genre:</strong>.{movie.Genre}</p>
            <p><strong>Director:</strong>.{movie.Director}</p>
            <p><strong>Actors:</strong>.{movie.Actors}</p>

          </div>
        </div>

      </body> */}

      {/* <body className='flex items-center justify-center min-h-screen bg-gray-100 gap-2'>

        <div className='h-350px w-250px border-2 overflow-hidden shadow-md bg-white rounded-lg' >
          <img className='w-full h-50 object-cover ' src="src/download.jpg" alt="" />

          <div className='p-4'>
            <span className='text-xs font-bold text-white bg-green-500 px-3 py-2 rounded-full'>NEW</span>
            <span className='text-black text-xs ml-2 font-semibold' >3 BEDS * 2 BATHS </span>

            <h3 className='text-lg font-bold mt-2'>Beautiful Home in the...</h3>

            <p className='text-gray-600'>$1,900.00 / wk</p>

            <div className='flex items-center mt-2'>
              <div className='flex text-green-500'>⭐⭐⭐⭐⭐</div>
              <span className='text-black font-bold text-sm ml-2'>34 reviews</span>
            </div>
          </div>
        </div> */}

      {/* Card 1 */}
      {/* <div className='flex space-x-6'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden w-80'>
            <img className='w-full h-50 object-cover' src="src/images.jpg" alt="" />
            <div className='p-4'>
              <h3 className='text-lg font-semibold'>Unlocking the Secrets of Productivity</h3>
              <p className='text-gray-600 text-sm mt-2'>Boost efficiency,accomplish more.Learn proven strategies.</p>
              <div className='flex justify-between mt-4 '>
                <button className='text-gray-500 text-sm'>Cancel</button>
                <button className='text-blue-500 text-sm'>Preview</button>
                <button className='bg-indigo-600 text-white px-4 py-1 rounded-md text-sm'>Buy Now</button>
              </div>
            </div>
          </div> */}

      {/* Card2 */}
      {/* <div className='bg-white shadow-md rounded-lg overflow-hidden w-80'>
        <img className='w-full h-50 object-cover' src="src/js.jpg" alt="" />
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>The Ultimate JavaScript Course</h3>
          <p className='text-gray-600 text-sm mt-2'>The JAvaScript course for everyone!Master JavaScript with projects,challenges and theory.</p><br />
          <div className='flex justify-between mt-4 '>
            <button className='text-gray-500 text-sm'>Cancel</button>
            <button className='text-blue-500 text-sm'>Preview</button>
            <button className='bg-indigo-600 text-white px-4 py-1 rounded-md text-sm'>Buy Now</button>
          </div>
        </div>
      </div> */}

      {/* Card 3 */}

      {/* <div className='bg-white shadow-md rounded-lg overflow-hidden w-80'>
        <img className='w-full h-50 object-cover' src="src/python.jpg" alt="" />
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Mastering Python Course</h3>
          <p className='text-gray-600 text-sm mt-2'>Unlock the powero of Python.From basics to advanced techniques, become a coding maestro with our comprenhensive course.</p>
          <div className='flex justify-between mt-4 '>
            <button className='text-gray-500 text-sm'>Cancel</button>
            <button className='text-blue-500 text-sm'>Preview</button>
            <button className='bg-indigo-600 text-white px-4 py-1 rounded-md text-sm'>Buy Now</button>
          </div>
        </div>
      </div>

    </div> */}


      {/* Food */}
      {/* <div className='flex space-x-6'>
          <div className='border-4 border-pink-500 rounder-lg bg-white p-6 w-80 shadow-lg'>
            <img className='w-full h-32 object-contain' src="src/pizza.jpg" alt="" />
            <h3 className='text-lg font-semibold mt-4'>Pizza</h3>
            <p className='text-sm text-gray-500  '>Total Bill <span className='font-bold'>RM 6.00</span></p>
            <div className='mt-4 flex items-center space-x-2'>
              <span className='text-pink-500 font-semibold'>Splitwith</span>
              <div className='flex space-x-1 justify-between text-pink-700'>
                <img className='w-6 h-6 rounded-full border-2 border-white ' src="src/user.jpg" alt="" />
                <img className='w-6 h-6 rounded-full border-2 border-white' src="src/user.jpg" alt="" />
                <img className='w-6 h-6 rounded-full border-2 border-white' src="src/user.jpg" alt="" />
                <button className='bg-blue-500 text-white py-3 px-4 rounded-md text-sm'>Split Now</button>
              </div>
            </div>

          </div>
        </div> */}




      {/* <div className='flex space-x-6'>
          <div className='border-4 border-pink-500 rounder-lg bg-white p-6 w-80 shadow-lg'>
            <img className='w-full h-32 object-contain' src="src/icecream.jpg" alt="" />
            <h3 className='text-lg font-semibold mt-4'>Ice Cream</h3>
            <p className='text-sm text-gray-500  '>Total Bill <span className='font-bold'>RM 6.00</span></p>
            <div className='mt-4 flex items-center space-x-2'>
              <span className='text-pink-500 font-semibold'>Splitwith</span>
              <div className='flex space-x-1 justify-between text-pink-700'>
                <img className='w-6 h-6 rounded-full border-2 border-white ' src="src/user.jpg" alt="" />
                <img className='w-6 h-6 rounded-full border-2 border-white' src="src/user.jpg" alt="" />
                <img className='w-6 h-6 rounded-full border-2 border-white' src="src/user.jpg" alt="" />
                <button className='bg-blue-500 text-white py-3 px-4 rounded-md text-sm'>Split Now</button>
              </div>
            </div>

          </div>
        </div> */}



      {/* </body > */}

    </div >
  )
}



