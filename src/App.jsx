import {  useContext,  useState } from "react"
import Login from "./components/Auth/Login"
import AdminDeshbord from "./components/Dashbord/AdminDeshbord"
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord"
import { AuthContext } from "./context/AuthProvider"
// import { getLocalStorage, setLocalStorage } from "./utils/LocalSrorage"



function App() {

  const [user,setuser]= useState(null)
  const [loggedInUserData,setLoggdInUserData]= useState(null)
  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
    
    
  //   if(loggedInUser){
  //    setuser(loggedInUser.role)
  //   }}

  // },[authData])


  const handleLogin = (email,password) =>{
    if(email == 'admin@gmail.com' && password == '123'){
      setuser('admin');
      console.log(user)
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      
    }else if(authData){
      const employess =authData.employess.find((e)=>email == e.email && e.password == password)
     setuser("employess")
     localStorage.setItem("loggedInUser",JSON.stringify({role:"employess"}))
     console.log(user)
    }else{
      alert("Invalid Credentials")
    }
  }


 
  

  return (
    <>
   {!user ?  <Login handleLogin={handleLogin}></Login>: ''}

    {user == 'admin' ? <AdminDeshbord></AdminDeshbord>:<EmployeeDashbord></EmployeeDashbord>}

    
    </>
  )
}

export default App
