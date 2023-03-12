import React from 'react'

const FiterMeathod1 = () => {

    const names = ["Apple","Apple","Apple","Jone","Poul","Ringo","Geroge"];
    const filtered = names.filter(name =>name.includes("A"));
    console.log(filtered)
  return (
    <div className='text-center'>
        <h1 className='bg-warning py-2 '>Fiter Meathod</h1>
        {
            filtered.map((items)=>{
                return(
                    <>
                    
                    <li>{items}</li>
                    </>
                )
            })
        }
    </div>
  )
}

export default FiterMeathod1