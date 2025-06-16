'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const MainSlider = () => {
 var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay:true
 };
  return (
   <div className="py-10">
    <Slider {...settings}>
     <div className="p-2">
     <Image className="w-full" width={600} height={280} alt="الحالات الانسانيه" src={'/Placeholder.png'}/>
     </div>
     <div className="p-2">
     <Image className="w-full" width={600} height={280} alt="الحالات الانسانيه" src={'/Placeholder.png'}/>
     </div>
     <div className="p-2">
     <Image className="w-full" width={600} height={280} alt="الحالات الانسانيه" src={'/Placeholder.png'}/>
     </div>
     <div className="p-2">
     <Image className="w-full" width={600} height={280} alt="الحالات الانسانيه" src={'/Placeholder.png'}/>
     </div>
     
    </Slider> 

   </div>
  );
}

export default MainSlider
