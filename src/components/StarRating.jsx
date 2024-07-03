'use client'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';

const StarRating = ({ratingValue}) => {
      const [rating, setRating] = useState(ratingValue);
      const handleRating = (rate) => {
           setRating(rate)
      }
  return (
      <Rating
          onClick={handleRating}
          initialValue={rating}
          className='flex items-center gap-x-2 '
          size={20}
          SVGstyle={{ display: 'inline' }}
          iconsCount={1}
          fillClassName='bg-yellow-300'
      />
  )
}

export default StarRating