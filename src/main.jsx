import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      < AuthProvider >
        <RouterProvider router={router}></RouterProvider>
        <Toaster position='top-center' reverseOrder={false} />
      </AuthProvider >
    </HelmetProvider>
  </StrictMode>,
)
