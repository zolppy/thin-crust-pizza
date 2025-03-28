import { ReactNode } from "react";

const FormBtn = ({ children }: { children: ReactNode }) => {
    return (
        <button
            type="submit"
            className="py-2 px-4 text-black bg-[#f1f1f1] uppercase active:bg-[#ccc] lg:hover:bg-[#ccc] lg:hover:cursor-pointer"
        >
            {children}
        </button>
    );
};

FormBtn.displayName = "FormBtn";

export default FormBtn;
