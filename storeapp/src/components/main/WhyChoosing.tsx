import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function WhyChoosing() {
  return (
    <>
      <div className="font-bold text-base md:text-xl lg:text-2xl tracking-wide dark:text-secondary-foreground ">
        چرا باید مارا انتخاب کنید
      </div>
      <div className="flex items-center justify-between  mb-4  flex-wrap md:flex-nowrap  ">
        <div className="p-2 space-y-4">
          <h3 className="font-semibold text-base  md:text-xl  dark:text-secondary-foreground">
            امکانات لوکس
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wide md:tracking-normal leading-5 dark:text-secondary-foreground">
            مزیت استفاده از فضای کاری با ما این است که خدمات راحت و امکانات همه
            جانبه را به شما می دهد.
          </p>
          <Link
            className="flex items-center gap-x-1 text-primary text-sm font-semibold"
            to="/about">
            <HiOutlineArrowLongRight className="text-base mt-1" />
            <span>اطلاعات بیشتر</span>
          </Link>
        </div>
        <div className="p-2 space-y-4">
          <h3 className="font-semibold text-base  md:text-xl dark:text-secondary-foreground">
            قیمت مقرون به صرفه
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wide md:tracking-normal leading-5  dark:text-secondary-foreground">
            شما می توانید یک فضای کاری با بالاترین کیفیت را با قیمتی مقرون به
            صرفه تهیه کنید و همچنان از امکاناتی که در اینجا وجود دارد لذت ببرید.
          </p>
          <Link
            className="flex items-center gap-x-1 text-primary text-sm font-semibold"
            to="/about">
            <HiOutlineArrowLongRight className="text-base mt-1" />
            <span>اطلاعات بیشتر</span>
          </Link>
        </div>
        <div className="p-2 space-y-4">
          <h3 className="font-semibold text-base  md:text-xl  dark:text-secondary-foreground">
            تنوع فراوان
          </h3>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wide md:tracking-normal leading-5  dark:text-secondary-foreground">
            ما انتخاب های منحصر به فرد فضای کاری را ارائه می دهیم تا بتوانید
            فضای کاری را به دلخواه انتخاب کنید.
          </p>
          <Link
            className="flex items-center gap-x-1 text-primary text-sm font-semibold"
            to="/about">
            <HiOutlineArrowLongRight className="text-base mt-1" />
            <span>اطلاعات بیشتر</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyChoosing;
