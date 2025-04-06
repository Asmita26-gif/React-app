import React from 'react'
import { useParams } from 'react-router'

export default function Categoryitems() {
  const { label } = useParams();


  console.log(label);
  return (
    <div>

      <h1>Items Page</h1>

    </div>
  )
}
