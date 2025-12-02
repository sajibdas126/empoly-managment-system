import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")

    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("email is", email);
        console.log("pasword is", password);

        setEmail("")
        setPassword("")
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl shadow'>
            <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
            
                className='flex flex-col items-center justify-center'>
                <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                
                className='required text-black bg-transparent outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                    value={password}
                    onChange={(e)=>{
                       setPassword(e.target.value) 
                    }}
                className='required text-black bg-transparent outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-5' type="password" placeholder='Enter your password' />
                <button className=' text-black b-transparent outline-none  border-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white mt-5'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login