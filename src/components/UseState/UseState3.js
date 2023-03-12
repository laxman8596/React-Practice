// import React,{useState} from 'react';

// const UseState3 = () => {
//     const [showData,setShowData] = useState(false)
//     const True = ()=>{
//         setShowData(!showData)
//     }
//   return (
//     <div className='text-center'>
//     <button className='btn btn-danger my-4' onClick={True} >{showData ? "Hide":"show Data"}</button>
//     {
//         showData &&(
//             <div>
//             <p>
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly
//              used to demonstrate the visual form of a document or a typeface without 
//              Lorem ipsum may be used as a placeholder before final copy is availabl</p>
//             <p>
//             In publishing and graphic design, Lorem ipsum is a placeholder text commonly
//              used to demonstrate the visual form of a document or a typeface without 
//              Lorem ipsum may be used as a placeholder before final copy is availabl</p>
//             </div>
//         )
//     }
//     </div>
//   )
// }

// export default UseState3


import React,{useState} from 'react';

const UseState3 = () => {
  const [showdata,setShowData] = useState(false);
  const changeText = ()=>{
    setShowData(!showdata)
  }
  return (
    <div className='text-center'>
      <button className='btn btn-dark' onClick={changeText}>{showdata ? "Hide" :"ShowData"}</button>
      {showdata && (<p>In publishing and graphic design, Lorem ipsum is 
        a placeholder text commonly used to demonstrate the visual form 
        of a document or a typeface without relying on meaningful content.
         Lorem ipsum may be used as a placeholder before final copy is available.</p>)}
    </div>
  )
}

export default UseState3




























