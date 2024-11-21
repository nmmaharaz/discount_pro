import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import "react-slideshow-image/dist/styles.css";
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  console.log("BANNERDATA", bannerData);
  useEffect(() => {
    fetch("bannerImage.json")
      .then((res) => res.json())
      .then((data) => setBannerData(data));
  }, []);

  // const fadeImages = [
  //   {
  //     url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  //     caption: 'First Slide'
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  //     caption: 'Second Slide'
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  //     caption: 'Third Slide'
  //   },
  // ];

  return (
    <div className="">
      <div className="slide-container">
        <Fade>
          {bannerData.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-full h-[600px] object-fill"
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
