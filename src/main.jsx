import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './Class 12/store.jsx'
import { store1 } from './Class 11/store1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Provider store={store1}>
    <App />
    <ToastContainer position='top-right' theme="dark" autoClose={2000} />
    </Provider>
    </>
  </StrictMode>,
)
