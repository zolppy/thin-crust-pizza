import { ReactNode } from "react";

const Form = ({ children }: { children: ReactNode }) => {
    return <form className="flex flex-col gap-y-4">{children}</form>;
};

Form.displayName = "Form";

export default Form;
