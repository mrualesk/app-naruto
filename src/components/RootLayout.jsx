import React from 'react';
import {Outlet} from "react-router";
import Header from "./Header.jsx";

export default function RootLayout() {
    return (
        <div className="h-screen">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer className="text-center my-16">
                <p>© 2025 Naruto. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};
