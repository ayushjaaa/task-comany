  import React, { useEffect, useState } from "react";
  import "./CompanyList.css";
  import { Link } from "react-router-dom";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";


  const CompanyList = () => {
    const navigate = useNavigate()
    const [comanydata, setcomanydata] = useState([])
  const [serach, setserach] = useState("")
  const [shorby, setshorby] = useState("")
    const apiCall = async()=>{
  try{
    const response = await axios.get("http://localhost:3000/api/company/allcompany")
    console.log(response.data.allcompany)
    setcomanydata(response.data.allcompany)

  }catch(error){
  console.log(error)
  }

    }

    useEffect(() => {
      apiCall()
      console.log(comanydata)
    }, [])

    let displayList = [...comanydata]
  if(serach.trim() != "" ) {
    displayList = displayList.filter((vale)=> vale.location.toLowerCase().includes(serach.toLowerCase()))
  }

  if(shorby === "Name"){
    displayList = displayList.sort((a,b)=>a.CompanyName.localeCompare(b.CompanyName))

  }
  else if(shorby === "Reviws"){
    displayList = displayList.sort((a,b)=>b.ReviwsId.length - a.ReviwsId.length)
  }else if(shorby === "Date"){
    displayList = displayList.sort((a,b)=>new Date(b.foundedOn) - new Date(a.foundedOn))

  }
  const serchHandler = (e)=>{
    setserach(e.target.value)
  }
    
  const shortByHandler = (e)=>{
    setshorby(e.target.value)
  }

    return (
      <div className="main-container">
        
        <div className="filters">
          <input
            type="text"
            className="city-input"
            onChange={(e)=>serchHandler(e)}
            value={serach}
            placeholder="search location"
      
          />
          <button className="find-btn">Find Company</button>
          <Link to='/ComanayForm' className="add-btn">+ Add Company</Link>
          <select className="sort-select" onChange={(e)=>shortByHandler(e)}>
            <option>Name</option>
            <option>Reviws</option>
            <option>Date</option>
          </select>
        </div>

        <p className="result">Result Found: 1</p>

        { displayList.length > 0 && displayList.map((company) => (
          <div className="company-card" key={company.id}  onClick={()=>navigate(`/DetailofCOmany/${company._id}`)}>
            <div className="left">
              <img src={company.logo} alt={company.CompanyName} className="company-logo" />
              <div className="company-info">
                <h3>{company.name}</h3>
                <p className="address">{company.location}</p>
                <p className="rating">
                  {company.rating}{" "}
                  <span className="stars">⭐⭐⭐⭐⭐</span> {company.ReviwsId.length} Reviews
                </p>
              </div>
            </div>
            <div className="right">
              <p className="date">{new Date(company.foundedOn).toLocaleDateString()}</p>
              <button className="detail-btn">Detail Review</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default CompanyList;
