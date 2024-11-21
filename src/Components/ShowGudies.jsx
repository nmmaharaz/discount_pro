
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShowGudies = ({guides}) => {
    
    return (
        <div>
            <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 600,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 600
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
 {
    guides.map((guide, i)=><div key={i}><div className="card mr-9 card-compact bg-base-100 max-w-[400px] h-[420px]">
        <figure>
          <img className="w-full object-center h-[280px]"
            src={guide.photo}
            alt="Shoes" />
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
          <h2 className="text-[16px]">{guide.item}</h2>
          <p className="card-title">{guide.description}</p>
          <div className="card-actions flex justify-between">
            <p>{guide.people_name}</p>
            <p className="flex justify-end">{guide.date}</p>
          </div>
        </div>
      </div></div>)
 }
</Carousel>
        </div>
    );
};

export default ShowGudies;