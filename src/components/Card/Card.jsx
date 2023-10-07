import React from "react";
import "./Card.css";
import { RiStarSFill } from "react-icons/ri";
import { ImStarHalf } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Card = ({ data }) => {
  return (
    <div className="card" style={{ height: data.detailsBtn ? '' : '100vh' }} >
      <div className="img-section">
        <div className="bage">{data.bage}</div>
        {data.detailsBtn ? (
          ""
        ) : (
          <div className="crose" >
            <Link to="/">
              <AiOutlineCloseCircle size={40} />
            </Link>{" "}
          </div>
        )}

        <img src={data.imgUrl} alt="watch" style={{ width: data.detailsBtn ? '' : '300px' ,height: data.detailsBtn ? '' : '300px'  }}/>
      </div>
      <div className="description-section">
        <span>{data.title}</span>
        <br />
        <span style={{ display: "flex ", alignItems: "center" }}>
          <RiStarSFill color="orange" />
          <RiStarSFill color="orange" />
          <RiStarSFill color="orange" />
          <RiStarSFill color="orange" />
          <ImStarHalf color="orange" size={13} />
          <span style={{ paddingLeft: "5px", fontSize: "13px" }}>
            {data.review}K
          </span>
        </span>

        <br />
        <span>
        Price :
          <sup style={{ fontSize: "11px" }}>$</sup>
          {data.price}
          <sup style={{ fontSize: "11px" }}>99</sup>
        </span>
        <br />
        {data.detailsBtn ? (
          ""
        ) : (
          <>
            {" "}
            <p>Features:</p>
            <ul style={{ fontSize: "11px", padding: "5px 10px" }}>
              {data.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}
        <div className="affiliate-btn">
          <button>
            <a
              href={data.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Out On Amazon
            </a>
          </button>

          {data.detailsBtn && (
            <button>
              {" "}
              <Link to={`/details/${data.id}`}>details</Link>{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
