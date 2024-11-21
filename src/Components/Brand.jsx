import { Wave } from "react-animated-text";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const Brand = ({ brand }) => {
  console.log("Brand", brand)
  return (
    <div className="my-7 w-9/12 mx-auto">
      <div className="border rounded-2xl flex flex-col lg:flex-row justify-between items-center p-7 *:mb-3 lg:*:mb-0 bg-white">
          <div className="flex w-[180px] justify-center flex-col">
          <div className="flex border border-solid rounded-xl  border-gray-300 p-2">
            <img className="w-full h-[90px] object-fill " src={brand.brand_logo} alt="" />
          </div>
          <p className="text-2xl text-center text-[#f57f25] font-bold">
            {brand.brand_name}
          </p>
          <div className="flex justify-center">
            {
                brand.rating && ( <StarRatings
                    rating={brand.rating}
                    starRatedColor="#f57f25"
                    starDimension="18px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
          </div>
          </div>
        <div>
        <div className="divider my-1 lg:divider-horizontal"></div>
        <p className="text-4xl font-bold text-[#f57f25] mb-3 text-center">{brand.brand_name}</p>
        <p className="text-xl text-center mx-5 mb-4 lg:mb-0 text-center">{brand.description}</p>
        </div>
        <div className="flex items-center flex-col">
        {
          brand.isSaleOn &&  <p className="text-xl text-blue-700 mb-2"><Wave text="Sale is on" /></p>
        }
        <Link to={`/brand/${brand._id}`} className="btn w-full bg-[#f57f25] min-w-[130px] text-white font-semibold">View Coupons</Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
