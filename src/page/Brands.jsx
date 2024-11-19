import { useLoaderData } from "react-router-dom";
import Brand from "../Components/Brand";

const Brands = () => {
    const data = useLoaderData()

    return (
        <div className="py-1">
            {
                data.map(brand=><Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Brands;