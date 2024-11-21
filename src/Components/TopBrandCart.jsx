import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const TopBrandCart = ({topbrand}) => {
    console.log("This Top Brand",topbrand)
    return (
        <div className="flex items-center p-4 rounded-xl bg-white justify-between">
            <p className="text-xl text-[#f57f25] font-semibold">{topbrand.title}</p>
            <div className="ml-4">
            <div className="flex flex-col mb-2 w-[120px]">
            {
                topbrand.rating && ( <StarRatings
                    rating={topbrand.rating}
                    starRatedColor="#f57f25"
                    starDimension="18px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
          </div>
                <Link target="_blank" className="cursor-pointer text-[#0f6efb]" to={topbrand.shop_Link}>Visit Website</Link>
            </div>
        </div>
    );
};

export default TopBrandCart;