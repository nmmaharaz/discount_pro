import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import ShowTopBrand from "../Components/ShowTopBrand";
import BrandOnSell from "../Components/BrandOnSell";
import ShowGudies from "../Components/ShowGudies";
const Home = () => {
  const [topData, setTopData] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    fetch("topBrand.json")
      .then((res) => res.json())
      .then((data) => setTopData(data));
  }, []);
  const [guides, setGuides] = useState([]);
  useEffect(() => {
    fetch("guides.json")
      .then((res) => res.json())
      .then((data) => setGuides(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="w-10/12 mx-auto">
      <div>
        <div className="divider text-center font-bold my-9 text-4xl">
          Top Brands
        </div>
        <ShowTopBrand topData={topData}></ShowTopBrand>
        <Marquee pauseOnHover className="cursor-pointer my-7">
          {topData.map((discount) => (
            <div key={discount._id} className="mr-[80px]">
              <Link to={"/brands"}>
                <img
                  className="h-[50px] w-full"
                  src={discount.brand_logo}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="divider text-center font-bold my-9 text-4xl">
        Brands on Sell
      </div>
      <div className="mx-auto mb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            data.map(onsell=><BrandOnSell key={onsell._id} onsell={onsell}></BrandOnSell>)
        }
      </div>
      </div>
        <ShowGudies guides={guides}></ShowGudies>
      </div>
    </div>
  );
};

export default Home;
