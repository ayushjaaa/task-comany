import React from "react";
import "./CompanyList.css";

const companies = [
  {
    id: 1,
    name: "Graffersid Web and App Development",
    address: "816, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
    rating: 4.5,
    reviews: 41,
    date: "Founded on 01-01-2016",
    logo: "https://via.placeholder.com/60/0D1B2A/FFFFFF?text=G"
  },
  {
    id: 2,
    name: "Code Tech Company",
    address: "414, Kanha Appartment, Bhawarkua, Indore (M.P.)",
    rating: 4.5,
    reviews: 30,
    date: "Reg. Date 01-01-2016",
    logo: "https://via.placeholder.com/60/228B22/FFFFFF?text=CT"
  },
  {
    id: 3,
    name: "Innogent Pvt. Ltd.",
    address: "910, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)",
    rating: 4.5,
    reviews: 25,
    date: "Reg. Date 01-01-2016",
    logo: "https://via.placeholder.com/60/FFA500/FFFFFF?text=I"
  }
];

const CompanyList = () => {
  return (
    <div className="main-container">
      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          className="city-input"
          value="Indore, Madhya Pradesh, India"
          readOnly
        />
        <button className="find-btn">Find Company</button>
        <button className="add-btn">+ Add Company</button>
        <select className="sort-select">
          <option>Name</option>
          <option>Rating</option>
          <option>Date</option>
        </select>
      </div>

      <p className="result">Result Found: 1</p>

      {/* Company Cards */}
      {companies.map((company) => (
        <div className="company-card" key={company.id}>
          <div className="left">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <div className="company-info">
              <h3>{company.name}</h3>
              <p className="address">{company.address}</p>
              <p className="rating">
                {company.rating}{" "}
                <span className="stars">⭐⭐⭐⭐⭐</span> {company.reviews} Reviews
              </p>
            </div>
          </div>
          <div className="right">
            <p className="date">{company.date}</p>
            <button className="detail-btn">Detail Review</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
