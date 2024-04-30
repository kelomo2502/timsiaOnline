import { sliderData } from "../components/slider/slider-data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();


 

  const prevSlide = () => {
    // setCurrentSlide(
    //   (currentSlide - 1 + sliderData.length) % sliderData.length
    // );
    setCurrentSlide(currentSlide === 0? sliderData.length -1 : currentSlide - 1);
  };
  const nextSlide = () => {
    // setCurrentSlide((currentSlide + 1) % sliderData.length);
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    console.log("UseEffect called");
    return () => {
      clearInterval(timer);
    };
    
  }, [currentSlide]);
  return { navigate, prevSlide, nextSlide, sliderData, currentSlide };
};
