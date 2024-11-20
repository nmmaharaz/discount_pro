import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CouponCard = ({d, shop_Link}) => {
    const {description, condition, expiry_date, coupon_code} = d
    const coped = () =>{
        toast.success("Coupon Code Successfully Coped",{
          position: "top-center",
       })
      }
    return (
        <div className="bg-white p-6 text-center flex flex-col *:mb-3 justify-between rounded-2xl">
        
         <h3 className="text-3xl text-center font-bold text-[#f57f25]">{description}</h3>
            <h4 className="text-xl font-semibold text-gray-600">{condition}</h4>
            <p>Expiry Date: {expiry_date}</p>
          {/* <p>{moment(expiry_date, "DDMMYYYY").fromNow()}</p> */}
           <div className="flex justify-center">
           <CopyToClipboard text={coupon_code}>
              <button onClick={coped}  className="btn mr-4 bg-[#f57f25] text-white font-semibold cursor-pointer">
                {coupon_code}
              </button>
            </CopyToClipboard>
              <Link target="_blank" className="btn text-[#f57f25]" to={shop_Link}>
                Use Now
              </Link>
           </div>
          </div>
    )
}
export default CouponCard;