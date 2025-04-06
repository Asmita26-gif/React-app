import React from 'react';

export default function SearchItem({ data }) {
  return (
    <div className='mt-5'>
      <h2 className='text-xl font-semibold mb-2'>Search Results</h2>
      {data?.meals?.length > 0 ? (
        <ul className='grid grid-cols-2 gap-4'>
          {data.meals.map((meal) => (
            <li key={meal.idMeal} className='border p-3 rounded shadow'>
              <h3 className='font-bold'>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} className='w-full h-auto rounded mt-2' />
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
