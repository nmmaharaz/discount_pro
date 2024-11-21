import { useEffect, useState } from "react";
import TopBrandCart from "./TopBrandCart";

const ShowTopBrand = ({topData}) => {
   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {
                topData.map(topbrand=><TopBrandCart key={topbrand._id} topbrand={topbrand}></TopBrandCart>)
            }
        </div>
    );
};

export default ShowTopBrand;