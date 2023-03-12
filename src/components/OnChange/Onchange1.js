import React,{useState} from 'react';

const Onchange1 = () => {
    const [data,setData]=useState('');
    const ChangeHandler = (e)=>{
        setData(e.target.value)
    }
  return (
    <div className='text-center'>
        <h1>Show input Text</h1>
        <input type='text' name='username' placeholder='Enter Your Name' value={data}
        onChange={ChangeHandler}/>
        <h5>{data}</h5>
    </div>
  )
}

export default Onchange1