import React from 'react'

const Onclick = () => {
  return (
    <div className='text-center'>
      <button className='btn btn-dark' onClick={()=>console.log("clicked")}>change</button>
    </div>
  )
}

export default Onclick