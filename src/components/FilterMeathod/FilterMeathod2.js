import React from 'react'

const FilterMeathod2 = () => {
    const Numbers = [10,20,30,40,50,60,70,80];
    const filterd = Numbers.filter(Nums => Nums>50);
    
  return (
    <div className='text-center'>
        <h1 className='bg-dark text-white py-2'>Filter Meathod Practice 2</h1>
        {
            filterd.map((items)=>{
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

export default FilterMeathod2