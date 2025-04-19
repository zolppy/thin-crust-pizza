import { BsCupHotFill } from "react-icons/bs";

const CoffeeBtn = () => {
    return (
        <a
            target="_blank"
            href="https://ko-fi.com/zolppy"
            className="fixed -translate-y-1/2 -translate-x-1/2 bg-[#f44336] text-4xl flex items-center gap-x-2 p-3 rounded-full -right-4 top-[94%] active:bg-[#d32f2f] lg:hover:cursor-pointer lg:hover:active:bg-[#d32f2f]"
        >
            <BsCupHotFill />
        </a>
    );
};

CoffeeBtn.displayName = "CoffeeBtn";

export default CoffeeBtn;
