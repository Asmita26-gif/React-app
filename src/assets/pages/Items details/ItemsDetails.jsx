import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router';

export default function ItemsDetails() {
  const [data, setData] = useData();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const { id } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/loolup.php')
    }
  }
  return (
    <div>

    </div>
  )
}
