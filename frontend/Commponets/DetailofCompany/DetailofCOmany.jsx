import React, { useEffect, useState } from "react";
import "./CompanyDetails.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DetailofCompany = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [companyDetails, setCompanyDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [avgreviews, setavgreviews] = useState(0);
  const [shorby, setshorby] = useState(""); 
  const [list, setlist] = useState([]);


  const apiCall = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/company/${id}`);
      console.log("API Response:", response.data);
      setCompanyDetails(response.data.ComanyDetils);
    } catch (error) {
      console.error("Error fetching company details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  
  useEffect(() => {
    if (companyDetails.ReviwsId && companyDetails.ReviwsId.length > 0) {
      const total = companyDetails.ReviwsId.reduce((sum, r) => sum + r.ratings, 0);
      const average = total / companyDetails.ReviwsId.length;
      setavgreviews(average.toFixed(1)); 
    }
  }, [companyDetails]);

  
  useEffect(() => {
    if (companyDetails.ReviwsId && companyDetails.ReviwsId.length > 0) {
      let listofReviues = [...companyDetails.ReviwsId];

      if (shorby === "rating") {
    
        listofReviues.sort((a, b) => b.ratings - a.ratings);
      } else if (shorby === "date") {

        listofReviues.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      setlist(listofReviues);
    }
  }, [companyDetails, shorby]);

  if (loading) return <p>Loading company details...</p>;
  if (!companyDetails || Object.keys(companyDetails).length === 0)
    return <p>No company details available</p>;

  const shortByHandler = (e) => {
    setshorby(e.target.value);
  };

  const { logo, CompanyName, location, foundedOn } = companyDetails;

  return (
    <div>
      <div className="company-container">
        <div className="company-card">
          <img src={logo} alt={CompanyName} className="company-logo" />
          <div className="company-info">
            <h1 className="company-name">{CompanyName}</h1>
            <p className="company-location">📍 {location}</p>
            <p className="company-date">
              Founded: {new Date(foundedOn).toLocaleDateString()}
            </p>
          </div>
          <button onClick={() => navigate(`/${id}/Reviews`)}>Add reviues</button>
        </div>

        <div className="reviews-section">
          <div>
            <h2 className={avgreviews > 3 ? "green" : "red"}>
              {`Average Review ${avgreviews}`}
            </h2>
          </div>

          <div>
            <select className="sort-select" onChange={(e) => shortByHandler(e)}>
              <option value="">Sort By</option>
              <option value="rating">Rating</option>
              <option value="date">Date</option>
            </select>
          </div>


          <h2 className="reviews-title">List of All Reviews</h2>
          {list && list.length > 0 ? (
            <div className="reviews-list">
              {list.map((review) => (
                <div key={review._id} className="review-card">
                  <h3 className="reviewer-name">{review.ReviewerName}</h3>
                  <p className="review-subject">{review.subject}</p>
                  <p className="review-text">{review.reviewtext}</p>
                  <p className="review-rating">⭐ {review.ratings} / 5</p>
                  <p className="review-date">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-reviews">No reviews available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailofCompany;
