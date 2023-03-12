// import React,{useState} from 'react';

// const OnSubmit2 = () => {
//     const [data,setData]=useState({
//         username:'',
//         email:'',
//         password:'',
//         confirmpassword:'',
//     })

//     const {username,email,password,confirmpassword} = data;
//     const ChangeHandler = (e) =>{
//         setData({...data,[e.target.name]:e.target.value})
//     }

//     const submitHandler = (e) =>{
//         e.preventDefault();

//         if(username.length <=5){
//             alert("User Name Must be Atles 5 Characters")
//         }
//         else if (password !== confirmpassword){
//             alert("Passwords are Not Matching")
//         }
//         else{
//             console.log(data)
//         }


//     }
//   return (
//     <div className='text-center'>
//         <h4 className='text-center'>onSubmit Practice 2</h4>
//         <form onSubmit={submitHandler}>
//             <input type='text' name='username' placeholder='Enter Your Name' className='m-1'
//               value={username} onChange={ChangeHandler}/><br/>
//             <input type='email' name='email' placeholder='Enter Your Email' className='m-1'
//               value={email} onChange={ChangeHandler}/><br/>
//             <input type='password' name='password' placeholder='Enter Password' className='m-1'
//               value={password} onChange={ChangeHandler}/><br/>
//             <input type='password' name='confirmpassword' placeholder='Confirm Password' className='m-1' 
//               value={confirmpassword} onChange={ChangeHandler}/><br/>
//             <button type='submit' className='btn btn-success m-1'>Submit</button>
        
//         </form>
//     </div>
//   )
// }

// export default OnSubmit2










import React,{useState} from 'react';

const OnSubmit2 = () => {
  const [data,setData] = useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  })
  const {username,email,password,confirmpassword} = data;
  const ChangeHandler = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    if(username.length <=5){
      alert("User name must be at lest 5 characters")
    }
    else if(password !== confirmpassword){
      alert("passwords are not matching")
    }
   else{
    console.log(data)
   }
  }
  return (
    <div className='text-center'>
      <h4 className='bg-primary text-white'>Login Form</h4>
      <form onSubmit={submitHandler}>
        <input type="text" className='m-1' name="username" placeholder='Enter Your Name' value={username} 
        onChange={ChangeHandler}/><br/>
        <input type="email" className='m-1' name="email" placeholder='Enter Your Email' value={email} 
          onChange={ChangeHandler}/><br/>
        <input type="password" className='m-1' name="password" placeholder='Enter Your Password'  value={password} 
          onChange={ChangeHandler}/><br/>
        <input type="password" className='m-1' name="confirmpassword" placeholder='confirm Your Password' value={confirmpassword} 
          onChange={ChangeHandler}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default OnSubmit2