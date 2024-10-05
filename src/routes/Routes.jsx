import { createBrowserRouter, Navigate} from "react-router-dom";
import {Home,AddPost,EditPost,Post,Dashboard} from '../pages'
import App from "../App";
import { AuthLayout,Login,Signup } from "../components";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                children:[
                    {
                        index: true, // This acts as the default child route for `/`
                        element: <Navigate to="/login" />
                    },
                    {
                        path:'/login',
                        element:(
                            <AuthLayout authentication={false}>
                                <Login/>
                            </AuthLayout>
                        )
                    },
                    {
                        path:'/signup',
                        element:(
                            <AuthLayout authentication={false}>
                                <Signup/>
                            </AuthLayout>
                        )
                    },
                ]
            },
            {
                path:'/add-post',
                element:(
                    <AuthLayout authentication>
                        <AddPost/>
                    </AuthLayout>
                )
            },
            {
                path:'/edit-post/:slug',
                element:(
                    <AuthLayout authentication>
                        <EditPost/>
                    </AuthLayout>
                )
            },
            {
                path:'/post/:slug',
                element:<Post/>,
            },
            {
                path: "/dashboard",
                element: (
                  <AuthLayout authentication> 
                    <Dashboard />
                  </AuthLayout>
                ),
              },
        ]
    }
])