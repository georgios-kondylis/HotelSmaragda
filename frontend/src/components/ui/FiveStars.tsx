import React from 'react'

const FiveStars = () => {
  return (
    <div id="Stars" className="flex gap-1">
      {[1, 2, 3, 4, 5].map((_, i) => ( <img key={i} src="/icons/star.png" className="w-[20px]" alt="star" /> ))}
    </div>
  )
}

export default FiveStars