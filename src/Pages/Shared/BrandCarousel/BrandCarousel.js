/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image1 from "../../../assets/images/sundorbon.png";
import image2 from "../../../assets/images/Sajek.png";
import image3 from "../../../assets/images/Sreemongol.png";
import { Link } from "react-router-dom";

const BrandCarousel = () => {
  return (
    <div className="carousel carousel-center flex w-full absolute top-0 right-[-120px] p-4 space-x-4 bg-neutral rounded-box overflow-x-hidden">
      <div className="carousel-item">
        <Link>
          <img
            src={image1}
            alt={""}
            className="rounded-box border-4 border-yellow-600 rounded-lg"
          />
        </Link>
      </div>
      <div className="carousel-item">
        <Link>
          <img src={image2} alt={""} className="rounded-box" />
        </Link>
      </div>
      <div className="carousel-item">
        <Link>
          <img src={image3} alt={""} className="rounded-box" />
        </Link>
      </div>
    </div>
  );
};

export default BrandCarousel;
