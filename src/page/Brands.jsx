import { useLoaderData } from "react-router-dom";
import Brand from "../Components/Brand";

const Brands = () => {
    const data = useLoaderData()

    return (
        <div className="py-1">
            <div className="divider text-center font-bold my-9 text-4xl">
        All Brands
      </div>
            {
                data.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Brands;