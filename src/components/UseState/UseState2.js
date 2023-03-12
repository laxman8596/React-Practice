import React,{useState} from 'react';

const UseState2 = () => {
  const [count,setCount] = useState(0);
  const Increment = ()=>{
    setCount(count+1)
  };

  const Decrement = ()=>{
    setCount(count-1)
  }
  return (
    <div className='text-center'>
      <h1>{count}</h1>
      <button onClick={Increment} className='btn btn-success'>Increment</button>&nbsp;&nbsp;
      <button onClick={Decrement} className='btn btn-danger'> Decrement</button>
    </div>
  )
}

export default UseState2