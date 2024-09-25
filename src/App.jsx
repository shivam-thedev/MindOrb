import { Outlet } from "react-router-dom"
import { Footer, Header } from "./components"
// import { useDispatch, useSelector } from "react-redux";
// import { setDarkTheme, setLightTheme } from "../store/themeSlice";
import { useEffect } from "react";

function App() {
//  const dispatch=useDispatch();
//  const themeMode=useSelector((state)=>state.themeMode);

//  const darkMode=()=>{
//   dispatch(setDarkTheme());
//  }

//  const lightMode=()=>{
//   dispatch(setLightTheme());
//  }

//  useEffect(() => {
//    const html=docuemnt.querySelector("html");
//    html.classList.remove("light","dark");
//    html.classList.add(themeMode);
//  }, [themeMode])
 
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
