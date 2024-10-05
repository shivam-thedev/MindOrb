import { Outlet } from "react-router-dom"
import { Header, Loader } from "./components"
import { useDispatch} from "react-redux";
import { useEffect,useState } from "react";
import authService from "./appwrite/auth";
import { login,logout } from "./store/authSlice";

export default function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div>
      <Header/>
      <Outlet/>
    </div>
  ):<Loader/>
}








