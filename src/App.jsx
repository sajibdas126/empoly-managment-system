import {  useState } from "react"
import Login from "./components/Auth/Login"
import AdminDeshbord from "./components/Dashbord/AdminDeshbord"
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord"
// import { getLocalStorage, setLocalStorage } from "./utils/LocalSrorage"



function App() {

  const [user,setuser]= useState(null)

  const handleLogin = (email,password) =>{
    if(email == 'admin@gmail.com' && password == '123'){
      setuser('admin');
      console.log(user)
    }else if(email == "user@gmail.com" && password == '123'){
     setuser("employess")
     console.log(user)
    }else{
      alert("Invalid Credentials")
    }
  }


 
  

  return (
    <>
   {!user ?  <Login handleLogin={handleLogin}></Login>: ''}

    {user == 'admin' ? <AdminDeshbord></AdminDeshbord>:<EmployeeDashbord></EmployeeDashbord>}

    {/* <EmployeeDashbord></EmployeeDashbord> */}
    {/* <AdminDeshbord></AdminDeshbord> */}
    </>
  )
}

export default App
