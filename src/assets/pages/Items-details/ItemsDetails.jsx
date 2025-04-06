import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ItemsDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
        }
      });
      setData(response.data);
      setLoad(false);

    } catch (err) {
      setLoad(false);
      setErr(err.message);

    }

  }
  useEffect(() => {
    getData();
  }, [])
  if (load) {
    return <h1>Loading....</h1>
  }
  if (err) {
    return <h1>{err}</h1>
  }

  // const ingre = {
  //   strIngredient1: "Tomatoes",
  //   strIngredient10: "Chili Powder",
  //   strIngredient11: "Eggs",
  //   strIngredient17: "",
  //   strIngredient18: "",
  //   strIngredient19: "",
  //   strIngredient2: "Olive Oil",
  //   strIngredient20: "",
  //   strIngredient3: "Onion",
  //   strIngredient4: "Red Pepper",
  //   strIngredient5: "Green Pepper",
  //   strIngredient6: "Garlic"
  // };

  // console.log(Object.keys(ingre))
  console.log(data);
  return (
    <div className='p-5'>



      {data && data.meals.map((meal) => {
        return <div key={meal.idMeal} className='space-y-5'>
          <h1>{meal.strMeal}</h1>
          <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}>
          </iframe>

          <div className='flex gap-10'>
            <div>
              {Object.keys(meal).map((ing) => {
                if (ing.startsWith("strIngredient") && meal[ing].trim().length > 0) {
                  return <h1 key={ing}>{meal[ing]}</h1>
                }
              })}
            </div>

            <div>
              {Object.keys(meal).map((measure) => {
                if (measure.startsWith("strMeasure") && meal[measure].trim().length > 0) {
                  return <h1 key={measure}>{meal[measure]}</h1>
                }
              })}
            </div>




            <div>
              <img className='h-[300px] w-[400px]' src={meal.strMealThumb} alt="" />

            </div>

          </div>





        </div>
      })}

    </div>
  )
}
