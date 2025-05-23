import { useState } from "react";

interface Prop {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    error = "",
}: Prop) => {
    const [focused, setFocused] = useState(false);

    const isActive = focused || value.length > 0;

    return (
        <div className="relative w-full">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder=" "
                aria-invalid={!!error}
                className={`peer h-12 w-full px-3 pt-6 pb-2 text-sm text-gray-900 bg-black placeholder-transparent
          focus:outline-none transition-all duration-200
          ${error
                        ? "border-b-2 border-b-white"
                        : isActive
                            ? "border-2 border-white"
                            : "border-b-2 border-gray-300"
                    }`}
            />
            <label
                htmlFor={name}
                className={`absolute pointer-events-none left-3 text-md transition-all duration-200 px-1
          ${isActive ? "top-1 text-xs text-white" : "text-neutral-400 top-3.5"}`}
            >
                {label}
            </label>

            {error && (
                <p className="text-red-600 text-sm font-bold mt-1 px-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
