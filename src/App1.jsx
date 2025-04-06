import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import TodoPage from './components/todo/TodoPage'

export default function App1() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
    
}
