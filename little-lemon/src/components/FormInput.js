import { useState } from "react";
import './formInput.css';
const FormInput = (props) => {
    const[focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleBlur=(e)=>{
        setFocused(true)
    }
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleBlur}
                required
                focused = {focused.toString()}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            <div id="errorMessage" className="text-border border-t-0 border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700 text-xs mb-3">{errorMessage}</div>
        </div>
    );
}

export default FormInput;