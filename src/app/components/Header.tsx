import Image from "next/image";
import SeeMenuBtn from "@/app/components/SeeMenuBtn";
import { pizzaImg } from "@/utils/mocks/images";

const Header = () => {
  return (
    <header className="relative h-[90vh] overflow-x-hidden">
      <Image
        src={pizzaImg.src}
        alt={pizzaImg.alt}
        title={pizzaImg.title}
        className="grayscale-50 h-full object-cover object-left-top md:w-full"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-5">
        <h1 className="text-white text-6xl font-bold text-center leading-20 md:text-[100px] md:leading-36 md:font-normal">
          thin <br />
          <span className="uppercase">crust pizza</span>
        </h1>
        <SeeMenuBtn>Let me see the menu</SeeMenuBtn>
      </div>
      <div className="absolute p-1 bg-black text-white text-2xl -translate-x-1/2 -translate-y-1/2 bottom-[-15px] left-[100px]">
        Open from 10am to 12pm
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
