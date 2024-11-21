import StarRatings from "react-star-ratings";

const RivewCard = ({rivewData}) => {
    const {photo, name, rating, description} = rivewData
    return (
        <div>
            <div className="card bg-base-100 max-w-96">
  <figure>
    <img className="h-[250px] object-center w-full"
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
        <div className="flex justify-between">
            <p>
            {
                rating && ( <StarRatings
                    rating={rating}
                    starRatedColor="#f57f25"
                    starDimension="18px"
                    starSpacing="2px"
                    numberOfStars={5}
                    name='rating'
                  />)
            }
            </p>
            <div className="flex justify-between">
            <p>by <span className="font-semibold">{name}</span></p>
            </div>
        </div>
    <p>{description}</p>
  </div>
</div>
        </div>
    );
};

export default RivewCard;