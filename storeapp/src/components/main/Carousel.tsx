import { Card, CardContent } from "../ui/card";
import hero1 from "../../assets/images/hero/Rectangle 1446 (1).png";
import hero2 from "../../assets/images/hero/Rectangle 1446.png";
import hero3 from "../../assets/images/hero/Rectangle 1450 (1).png";
import hero4 from "../../assets/images/hero/Rectangle 1450.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
type CarouselImages = { img: string };
const carouselImages: CarouselImages[] = [
  { img: hero1 },
  { img: hero2 },
  { img: hero3 },
  { img: hero4 },
];
function HeroCarousel() {
  return (
    <Carousel
      dir="ltr"
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full ">
      <CarouselContent className="w-full mx-auto">
        {carouselImages.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item.img} alt="" className="w-[80%] h-[80%]" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="dark:text-white" />
      <CarouselNext className="dark:text-white" />
    </Carousel>
  );
}

export default HeroCarousel;
