import {createRoot} from 'react-dom/client'
import './index.css'

import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Characters from "./pages/Characters.jsx";
import Character from "./pages/Character.jsx";
import RootLayout from "./components/RootLayout.jsx";
import FavoritesProvider from "./providers/FavoritesProvider.jsx";
import Favorites from "./pages/Favorites.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Characters,
            },
            {
                path: "detalle/:id",
                Component: Character
            },
            {
                path: "favoritos",
                Component: Favorites
            }
        ]
    },
]);


createRoot(document.getElementById('root')).render(
    <FavoritesProvider>
        <RouterProvider router={router}/>
    </FavoritesProvider>
)
