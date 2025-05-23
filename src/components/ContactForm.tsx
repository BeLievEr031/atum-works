/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Input from './Input';
interface IError {
    Name: "", Email: ""
}
export default function ContactForm() {
    const [formData, setFormData] = useState({ Name: '', Email: '' });
    const [errors, setErrors] = useState<IError>({ Email: "", Name: "" });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // clear error on change
    };

    const validate = () => {
        const newErrors: { Name: string, Email: string } = { Name: "", Email: "" };
        if (!formData.Name.trim()) {
            newErrors.Name = 'Please fill in this required field';
        }
        if (!formData.Email.trim()) {
            newErrors.Email = 'Please enter a valid email address.';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
            newErrors.Email = 'Please enter a valid email address.';
        }
        return newErrors;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors as IError);
        } else {
            console.log('Form submitted:', formData);
            // Handle real submission here
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 flex flex-col items-center w-full w-full mx-auto"
        >
            <Input
                label="Name*"
                type="text"
                name="Name"
                value={formData.Name}
                onChange={() => { }}
                error={errors.Name}
            />
            <Input
                label="Email*"
                type="text"
                name="Email"
                value={formData.Email}
                onChange={() => { }}
                error={errors.Email}
            />

            <textarea
                rows={4}
                name="Message"
                placeholder="Subscribe to stay updated"
                className="bg-transparent text-neutral-400 w-full border border-white pt-4 px-2"
            ></textarea>

            <button
                type="submit"
                className="bg-white py-4 px-10 font-semibold text-xl text-center self-center uppercase"
            >
                send
            </button>
        </form>
    );
}
