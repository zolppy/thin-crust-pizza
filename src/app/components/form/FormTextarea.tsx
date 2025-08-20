interface IFormTextarea {
  placeholder: string;
  required: boolean;
}

const FormTextarea = ({ placeholder, required }: IFormTextarea) => {
  return (
    <textarea
      placeholder={placeholder}
      required={required}
      className="border border-[#ccc] py-4 px-2 bg-white text-black"
    ></textarea>
  );
};

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
