import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import AuthPage from "./pages/AuthPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/',
            element: <HomePage />,
            id: 1,
        },
        // {
        //     link: '/signup',
        //     element: <AuthPage />,
        //     id: 2
        // }
    ]
    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    )
}

export default MainRoutes
