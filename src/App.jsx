import {  useContext, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDeshbord from "./components/Dashbord/AdminDeshbord"
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord"
import { AuthContext } from "./context/AuthProvider"
// import { getLocalStorage, setLocalStorage } from "./utils/LocalSrorage"



function App() {

  const [user,setuser]= useState(null)
  const authData = useContext(AuthContext)


  const handleLogin = (email,password) =>{
    if(email == 'admin@gmail.com' && password == '123'){
      setuser('admin');
      console.log(user)
      // && authData.employess.find((e)=>email == e.email && e.password == password)
    }else if(authData){
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
