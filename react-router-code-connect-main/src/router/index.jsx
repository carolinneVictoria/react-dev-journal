import { BrowserRouter, Route, Routes } from "react-router"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { Feed } from "../pages/Feed"
import { BlogPost } from "../pages/BlogPost"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Logout } from "../pages/Logout"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/register' element={<Register />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/logout' element={<Logout />} />

                <Route path='/' element={
                    <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute>
                } />

                <Route path='/blog-post/:slug' element={
                    <ProtectedRoute>
                        <BlogPost />
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}