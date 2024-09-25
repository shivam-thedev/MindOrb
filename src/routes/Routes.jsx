import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import RTE from "../components/RTE";

export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/rte' element={<RTE/>} />

        </Route>
    )
)