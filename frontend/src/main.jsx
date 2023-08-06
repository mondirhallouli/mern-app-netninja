import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// layouts
import AppLayout from './layouts/AppLayout.jsx'
// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
