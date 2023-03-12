import React,{useState} from 'react'

const Usestate1 = () => {
  const [name,setName] = useState("Laxman");
  const changeHandler =()=>{
    setName("Laxman is a Software devloper")
  }
  return (
    <div className='text-center'>
      <h1>{name}</h1>
      <button className='btn btn-dark' onClick={changeHandler}>Change Text</button>
    </div>
  )
}

export default Usestate1