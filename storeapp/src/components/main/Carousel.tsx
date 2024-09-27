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
    <Carousel className="max-w-[400px]" dir="ltr">
      <CarouselContent>
        {carouselImages.map((item, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="border-gray-400">
                <CardContent className=" border-white flex aspect-square items-center justify-center w-full p-0 ">
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full rounded-md p-4 overflow-hidden"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}

export default HeroCarousel;
