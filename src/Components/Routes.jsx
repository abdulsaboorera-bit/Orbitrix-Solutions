import React from 'react';
import { Route, Routes } from "react-router-dom"
import Frontend from "./Frontend"

const Index = () => {
  return (

    <div>
<Routes>

<Route path="/*" element={<Frontend/>} />


</Routes>


    </div>

  )
}

export default Index