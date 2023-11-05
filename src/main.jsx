import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './assets/styles/main.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
)
