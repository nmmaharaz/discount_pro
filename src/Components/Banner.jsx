import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "react-slideshow-image/dist/styles.css";
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  console.log("BANNERDATA", bannerData);
  useEffect(() => {
    fetch("bannerImage.json")
      .then((res) => res.json())
      .then((data) => setBannerData(data));
  }, []);

  return (
    <div className="">
      <div className="slide-container">
        <Fade autoplay={true}
        duration={2000}
        transitionDuration={1000} arrows={false}>
          
          {bannerData.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-full h-[650px] object-fill"
                src={fadeImage.url}
              />
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
