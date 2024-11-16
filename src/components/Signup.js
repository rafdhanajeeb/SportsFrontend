import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        department: '',
        sportsInterests: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => {
            const newSportsInterests = prev.sportsInterests.includes(value)
                ? prev.sportsInterests.filter((sport) => sport !== value)
                : [...prev.sportsInterests, value];

            return { ...prev, sportsInterests: newSportsInterests };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword, department, sportsInterests } = formData;

        // Validate fields
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                department,
                sportsInterests,
            }),
        });

        if (response.ok) {
            alert('Account created successfully!');
        } else {
            const errorData = await response.json();
            alert(errorData.message || 'Something went wrong');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                    />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                    />

                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="">Select your department</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>

                    <div className="sports-interests">
                        <label>
                            <input
                                type="checkbox"
                                value="Football"
                                onChange={handleCheckboxChange}
                            />
                            Football
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Basketball"
                                onChange={handleCheckboxChange}
                            />
                            Basketball
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Tennis"
                                onChange={handleCheckboxChange}
                            />
                            Tennis
                        </label>
                    </div>

                    <button className="sign-up-btn" type="submit">
                        Sign Up
                    </button>
                     <p class="login-link">Already have an account? <a href="/login">Sign In instead</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
