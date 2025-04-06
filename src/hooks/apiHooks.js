import { useEffect, useState } from "react";
import { useNavigate } from "react-router";




export const useApiHooks = (api, params) => {
  const nav = useNavigate

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();



  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(api, {
        params: params
      });
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setErr(err.message);


    }

  }



  useEffect(() => {
    getData();

  }, []);
  return [load, data, err];

}