

import { useEffect, useState } from "react";


import {useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import CouponCard from "../Components/CouponCard";


const BrandDatails = () => {
  const [brandDetails, setbrandDetails] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const singleBrandData = data.find((d) => d._id == id);
    setbrandDetails(singleBrandData);
  }, [data, id]);

  const { brand_name, brand_logo, coupons, shop_Link, rating } = brandDetails;



  return (
    <div className="w-10/12 mx-auto mt-7">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl text-[#f57f25] font-bold">{brand_name}</h2>
        <div className="flex w-[150px] h[150px]  overflow-hidden p-2 flex-col items-center">
          <img className="w-full h-full object-fill " src={brand_logo} alt="" />
        </div>
          <div>
            {rating && (
              <StarRatings
                rating={rating}
                starRatedColor="#f57f25"
                starDimension="24px"
                starSpacing="2px"
                numberOfStars={5}
                name="rating"
              />
            )}
          </div>
        </div>
      <div className="mt-7 rounded-2xl p-5 border border-solid border-gray-300">
      <div className="grid grid-cols-3 gap-x-5">
      {
        coupons && coupons.map((d, i) =><CouponCard key={i} shop_Link={shop_Link} d={d}></CouponCard>)
      }
      <div></div>
        </div>
      </div>
    </div>
  );
};

export default BrandDatails;
