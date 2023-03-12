import React,{useState,useEffect} from 'react';


const URL = "https://jsonplaceholder.typicode.com/users";

const UseEffect1 = () => {
    const [usersData,setUsersData] = useState([])

    const fetchusersData = async (url)=>{
        const response = await fetch(url);
        const data =await response.json()
        // console.log(data)
        setUsersData(data)
    }

    useEffect(()=>{
        fetchusersData(URL);
    },[])
    return (
        <div className='text-center'>
            <h1 className='bg-dark text-white py-3'>useEffect practice 1</h1>
            <div className='container'>
                <div className='row'>
                    {
                        usersData.map((items)=>{
                            const {id,name,email} = items;
                            return(
                                <>
                                <div className='col-12 col-md-6 col-lg-4'>
                                    <div className='card bg-dark text-white text-center py-3 m-1' key={id}>
                                        <h6>{name}</h6>
                                        <h6>{email}</h6>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseEffect1