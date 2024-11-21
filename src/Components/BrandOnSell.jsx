
import 'animate.css';



const BrandOnSell = ({onsell}) => {
    const { _id, brand_name, brand_logo, category, isSaleOn, coupons } = onsell;
 
    return (
        <div className='animate__animated animate__bounce animate__repeat-1 animate-duration: 5s animate-duration: 2s;'>
            <div className="card bg-base-100 max-w-96 h-[550px] shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={brand_logo}
      alt="Shoes"
      className="rounded-xl w-full h-[180px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-4xl font-bold text-[#0f6efb]" >{brand_name}</h2>
    <div className="divider my-1"></div>
    <p className="text-[#f57f25] text-xl text-center font-bold">Coupons</p>
    <div className="flex flex-col items-center justify-center">
    {
        coupons && coupons.map((d, i) =><p key={i}>{d.description}</p>)
      }
    </div>
    <div className="card-actions">
      <button className="bg-[#0f6efb] mt-2 text-white px-4 py-2 rounded-xl">{category}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandOnSell;