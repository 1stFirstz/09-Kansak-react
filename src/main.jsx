import React from 'react'  
import ReactDOM from 'react-dom/client'  // ใช้ ReactDOM เพื่อเรนเดอร์แอปพลิเคชัน React ไปที่ DOM
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  // createBrowserRouter` และ `RouterProvider` จาก react-router-dom เพื่อใช้ link component ต่างๆ
import Owner from './components/Owner.jsx';  // ดึง path มาใช้งาน Owner คอมโพเนนต์
import Home from './components/Home.jsx';  // ดึง path มาใช้งาน Home คอมโพเนนต์

const router = createBrowserRouter([
  {   //เป็นการสร้าง path ให้ หน้า Home และ Owner 
    path: "/",
    element:
      <Home/>
    ,
  },
  {
    path: "/Owner",
    element: <Owner/>
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render( // ใช้ RouterProvider เพื่อให้แอปสามารถใช้งาน router ที่กำหนดไว้ได้
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
