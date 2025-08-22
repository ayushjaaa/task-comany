import React from 'react'
import MainComponet from '../Commponets/MainComponet/MainComponet'
import { Route, Routes } from 'react-router-dom';
import "../Commponets/CompanyList.css";
import ComanayForm from '../Commponets/ComanayForm/ComanayForm';
import ReviewForm from '../Commponets/ReviewForm/ReviewForm';
import DetailofCOmany from "../Commponets/DetailofCompany/DetailofCOmany"
const App = () => {
  return (
  <>

          <Routes>
            <Route path='/' element={<MainComponet/>} ></Route>
          <Route path='/ComanayForm' element={<ComanayForm/>}>
   </Route>
   <Route path='/:id/Reviews' element={<ReviewForm/>}></Route>
   <Route path='/DetailofCOmany/:id' element ={<DetailofCOmany/>}></Route>
        </Routes>

        
        </>
  )
}

export default App
