'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailPayment = () => {

    const { id } = useParams();
    console.log(id)

  return (
    <div>DetailPayment</div>
  )
}

export default DetailPayment