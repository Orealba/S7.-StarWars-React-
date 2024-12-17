import { Carousel } from 'flowbite-react';
import starWars2 from '../assets/images/starWars2.jpg';
import starWars1 from '../assets/images/starWars1.jpg';
import starWars3 from '../assets/images/starWars3.jpg';
import starWars4 from '../assets/images/starWars4.jpg';
export const Carrousel = () => {
  return (
    <div className="fixed inset-0">
      <Carousel
        pauseOnHover
        slideInterval={5000}
        className="mt-20 mx-auto max-w-[80%]">
        <div className="relative h-[calc(100vh-12rem)]">
          <img
            src={starWars1}
            className="w-full h-full object-cover"
            alt="Star Wars Background"
          />
        </div>
        <div className="relative h-[calc(100vh-12rem)]">
          <img
            src={starWars3}
            className="w-full h-full object-cover"
            alt="Star Wars Background"
          />
        </div>
        <div className="relative h-[calc(100vh-12rem)]">
          <img
            src={starWars4}
            className="w-full h-full object-cover"
            alt="Star Wars Background"
          />
        </div>
      </Carousel>
    </div>
  );
};
