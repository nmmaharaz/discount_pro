import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Home = () => {
    const [discountData, setDiscountData] = useState([])
    useEffect(()=>{
        fetch('discount.json')
        .then(res=>res.json())
        .then(data=>setDiscountData(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <Marquee pauseOnHover className="cursor-pointer">
            {
                discountData.map(discount=><div key={discount._id} className="mr-[80px]" ><Link to={'/brands'}><img className="h-[50px] w-full" src={discount.brand_logo} alt="" /></Link></div>)
            }
            </Marquee>

        </div>
    );
};

export default Home;