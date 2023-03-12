import React,{useState} from 'react';

const OnSubmit1 = () => {
    const [data,setData] = useState({
        username:'',
        password:'',
    })

    const {username,password} = data;
    const changeHandler = (e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const SubmitHnadler = (e) =>{
        e.preventDefault();
        console.log(data)
        // setData(data)
    }
  return (
    <div className='text-center'> 
     <form onSubmit={SubmitHnadler}>
     <input type='text' placeholder='Enter Your Name' name='username' 
        value={username} onChange={changeHandler}/><br/>
        <input type='password' placeholder='Enter Your password' name='password'
        value={password} onChange={changeHandler}/><br/>
        <input type='submit'/>
     </form>
    </div>
  )
}

export default OnSubmit1