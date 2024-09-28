import HeroCarousel from "@/components/main/Carousel";
import Navbar from "@/components/main/Navbar";
import WhyChoosing from "@/components/main/WhyChoosing";

function Landing() {
  return (
    <>
      <div className="bg-hero absolute top-0 right-0 h-screen w-full z-30 ">
        <Navbar />
        <section className="flex items-center justify-center h-full">
          <h2 className="flex flex-col items-center text-white px-4 md:px-0 space-y-4">
            <p className="tracking-wide font-semibold text-xl md:text-4xl  ">
              خانه خود را با <span className="text-primary pl-2">Panto</span>
              زیباتر و مدرن تر کنید.
            </p>
            <span className="text-gray-200 text-lg">
              با سهولت و سرعت اتاق خود را با پانتو مینیمال و مدرن‌تر کنید
            </span>
          </h2>
        </section>
        <div className="absolute top-0 right-0 h-full w-full bg-gray-600/60 opacity-50 -z-30"></div>
      </div>

      <div className=" z-10 px-6 mb-6 space-y-8">
        <div className="h-screen flex items-center justify-between gap-x-4">
          <h1 className="text-2xl"></h1>
        </div>
        <WhyChoosing />
        <div className=" flex items-center justify-between w-full flex-wrap-reverse gap-y-3">
          <div className=" text-base md:text-4xl font-bold  flex items-center justify-center text-secondary">
            <p>فضای داخلی خود را مینیمال و مدرن تر کنید</p>
          </div>
          <HeroCarousel />
        </div>
      </div>
    </>
  );
}

export default Landing;
