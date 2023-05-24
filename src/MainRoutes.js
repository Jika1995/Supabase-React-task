import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTemplate from "./components/Templates/AddTemplate";
import EditTemplate from "./components/Templates/EditTemplate";
import TemplatesList from "./components/Templates/TemplatesList";
import HomePage from "./pages/HomePage";
// import AuthPage from "./pages/AuthPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/',
            element: <HomePage />,
            id: 1,
        },
        {
            link: '/addtemplate',
            element: <AddTemplate />,
            id: 2
        },
        {
            link: '/edit/:id',
            element: <EditTemplate />,
            id: 3
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
