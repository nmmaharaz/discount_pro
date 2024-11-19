import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Brand = ({ brand }) => {
  console.log("Brand", brand)
  return (
    <div className="my-7 w-11/12 mx-auto">
      <div className="border flex flex-col lg:flex-row justify-between lg:items-center border-solid border-base-200 p-4 bg-white">
        <div className="flex justify-between items-center *:mr-6">
          <div className="flex items-center min-h-[90px]">
            <img className="max-w-[80px]" src={brand.brand_logo} alt="" />
          </div>
          <p className="text-2xl text-[#f57f25] font-bold">
            {brand.brand_name}
          </p>
          <div>
            {
                brand.rating && ( <StarRatings
                    rating={brand.rating}
                    starRatedColor="#f57f25"
                    starDimension="24px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
          </div>
        </div>
        <p className="text-xl text-center mb-4">{brand.description}</p>
        <Link to={`/brand/${brand._id}`} className="btn bg-[#f57f25] text-white font-semibold">View Coupons</Link>
      </div>
    </div>
  );
};

export default Brand;
