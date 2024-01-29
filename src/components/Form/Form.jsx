import { useEffect, useState } from "react";
import { z } from "zod";
import "./form.css"

function fillForm() {
    return {
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        date: ""
    }
}

export default function Form() {
    const [form, setForm] = useState(fillForm())
    const [errors, setErrors] = useState(fillForm())

    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setForm((prevForm) => ({
    //         ...prevForm,
    //         [name]: value
    //     }));
    // };

    const handleChange = (event) => {
        let obj = {
            [event.target.name]: event.target.value
        }

        if (event.target.name === 'password') {
            let formCopy = { ...form };
            setForm({ ...formCopy, ...obj });
            // Update confirmPassword field as well
            setErrors({ ...errors, confirmPassword: "" });
        } else {
            let form_copy = { ...form };
            let payload = { ...form_copy, ...obj };
            setForm(payload);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const userSchema = z.object({
            username: z.string().min(5).max(20),
            password: z.string().min(5).max(20),
            confirmPassword: z.string().refine(data => data === form.password, {
                message: "The passwords did not match",
                path: ["confirmPassword"],
            }),
            email: z.string().email(),
            date: z.date(),
            phone: z.string().min(12).transform(data => Number(data)),
        })

        let results = userSchema.safeParse(form);

        if (results.error) {
            const copy = {};
            results.error.issues.forEach((el) => {
                const path = el.path[0];
                copy[path] = el.message;
            });
            setErrors(copy);
        } else {
            setErrors(fillForm());
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="form_field">
                <h1>Signup Form</h1>
                <div className="main_field">
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input value={form.username} onChange={handleChange} name="username" type="text" placeholder="enter username" />
                        <p className="error">{errors.username}</p>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input value={form.email} onChange={handleChange} name="email" type="email" placeholder="enter email" />
                        <p className="error">{errors.email}</p>
                    </div>
                    <div className="password">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input value={form.password} onChange={handleChange} name="password" type="password" placeholder="enter password" />
                        <p className="error">{errors.password}</p>

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input value={form.confirmPassword} type="password" onChange={handleChange} name="confirmPassword" placeholder="repeat password" />
                        <p className="error">{errors.confirmPassword}</p>
                    </div>
                    <div className="phone_birth">
                        <label htmlFor="phone">Phone Number</label>
                        <input value={form.phone} type="number" name="phone" onChange={handleChange} />
                        <p className="error">{errors.phone}</p>

                        <label htmlFor="date">
                            Birthdate
                        </label>
                        <input value={form.date} onChange={handleChange} name="date" type="date" placeholder="enter birthdate" />
                        <p className="error">{errors.date}</p>
                    </div>
                    <button type="submit">Signup</button>
                </div>
            </div>

        </form>
    )
}


