import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Characters from "./pages/Characters.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Characters,
    },
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
