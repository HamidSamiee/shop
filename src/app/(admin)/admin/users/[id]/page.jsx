'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailUser = () => {

    const params = useParams();
    console.log(params)
  return (
    <div>DetailUser</div>
  )
}

export default DetailUser