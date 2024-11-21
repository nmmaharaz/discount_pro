import { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import 'react-slideshow-image/dist/styles.css'
const Banner = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(()=>{
        fetch('dannerImage.json')
        .then(res=>res.json())
        .then(data=>setBannerData(data))
    },[])
    

    return (
        <div className="">
        {/* <Fade>
          {bannerData.map((bannerimage, index) => (
            <div key={index}>
              <img className='w-full h-full' src={bannerimage.url} />
            </div>
          ))}
        </Fade> */}
        {
            bannerData.map(bannerimage=><div key={bannerimage.key}>
                <SimpleImageSlider
                  width={896}
                  height={504}
                  images={bannerimage.url}
                  showBullets={true}
                  showNavs={true}
                />
              </div>)
        }
      </div>
    );
};

export default Banner;