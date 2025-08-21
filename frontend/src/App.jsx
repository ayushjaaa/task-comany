import React from 'react'
import CompanyList from '../Commponets/CompanyList'
import Navbar from '../Commponets/Navbar'
import "../Commponets/CompanyList.css";
const App = () => {
  return (
    <div className='width'>
      <Navbar/>
      <CompanyList/>
    </div>
  )
}

export default App
