import { getCurrentDateTime } from "@/utils/functions/date";

interface IFormInput {
    type: "text" | "number" | "datetime-local";
    placeholder?: string;
    required: boolean;
}

const FormInput = ({ type, placeholder, required }: IFormInput) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            defaultValue={
                type === "datetime-local" ? getCurrentDateTime() : undefined
            }
            required={required}
            className="border border-[#ccc] py-4 px-2 bg-white text-black w-full"
        />
    );
};

FormInput.displayName = "FormInput";

export default FormInput;
