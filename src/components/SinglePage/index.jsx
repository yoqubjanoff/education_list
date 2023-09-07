import React, { useContext, useEffect } from "react";
import "./SinglePage.css";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrowleft.svg";
import eduImg from "../../assets/icons/eduimg.svg";
import phone from "../../assets/icons/phone.svg";
import location from '../../assets/icons/location 1.svg'
import { Context } from "../../context/context";

const SinglePage = () => {
  const navigate = useNavigate()
  const { singleData } = useContext(Context);
 

  return (
    <div>
      <section className="single-page">
        <div className="container">
          <div className="single-page-wrap">
            <Link to="/" className="back-admin">
              <img src={arrow} alt="" className="back-arrow" />
            </Link>
            <div className="single-mainbox">
              <div className="single-name-box">
                <div className="name-box">
                  <p className="education-name1">{singleData?.name}</p>
                </div>
                <img src={eduImg} alt="" className="education-img" />
              </div>
              <ul className="single-lists">
                {singleData?.courses.map((course, index) => (
                  <li className="single-items" key={index}>
                    <p className="edu-title">{course?.subCourse}</p>
                  </li>
                ))}
              </ul>
              <div className="single-phonebox">
                <img src={phone} alt="" className="single-phoneImg" />
                <a
                  href={`tel:${singleData?.phone}`}
                  className="edu-phone-number"
                >
                  {singleData?.phone}
                </a>
              </div>
              <div className="single-phonebox">
                <img src={location} alt="" className="single-phoneImg" />
                <a
                  href={`tel:${singleData?.phone}`}
                  className="edu-phone-number"
                >
                  {singleData?.location}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
