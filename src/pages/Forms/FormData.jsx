import { useState } from "react";
import { InputData } from "./data";
import "./FormData.css";
import { registerForm } from "../../server/formDataPost";
import LottieData from "../LottieData";

const FormData = () => {
	const [formFields, setFormFields] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		let newValue = value;

		// FullName: letters only, single space, no leading space
		if (name === "FullName") {
			newValue = newValue
				.replace(/[^a-zA-Z ]/g, "")
				.replace(/\s+/g, " ")
				.trimStart();
		}

		// PhoneNumber: digits only, max 10
		if (name === "PhoneNumber") {
			newValue = newValue.replace(/[^0-9]/g, "").slice(0, 10);
		}

		setFormFields({ ...formFields, [name]: newValue });
		setErrors({ ...errors, [name]: "" });
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		if (!value) {
			setErrors((prev) => ({
				...prev,
				[name]: `${name} is required`,
			}));
		} else if (name === "Email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				setErrors((prev) => ({
					...prev,
					[name]: "Please enter a valid email like sample@gmail.com",
				}));
			}
		} else if (name === "PhoneNumber" && value.length !== 10) {
			setErrors((prev) => ({
				...prev,
				[name]: "Phone number must be 10 digits",
			}));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const newErrors = {};
		InputData.forEach((field) => {
			const val = formFields[field.name] || "";
			if (!val) newErrors[field.name] = `${field.name} is required`;
			if (
				field.name === "Email" &&
				val &&
				!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
			) {
				newErrors[field.name] =
					"Please enter a valid email like sample@gmail.com";
			}
			if (field.name === "PhoneNumber" && val.length !== 10) {
				newErrors[field.name] = "Phone number must be 10 digits";
			}
		});

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		registerForm(formFields, setFormFields, setIsSubmitting);
		setIsSubmitting(true);
		console.log("Form Submitted:", formFields);
	};

	return (
		<div className="forms">
			{/* Lottie Animated Background */}
			<div className="lottie_section">
				<LottieData />
			</div>
			<div className="form_wrapper">
				<h2>Sign Up & Grow Your Professional Network with SpecV</h2>
				<div className="form_container">
					{InputData.map((ele, i) => (
						<div key={i} className="inputs">
							<h4>{ele.name}*</h4>
							<input
								type={ele.type}
								name={ele.name}
								maxLength={ele.maxLength}
								placeholder={ele.placeholder}
								value={formFields?.[ele?.name] || ""}
								onChange={handleInputChange}
								onBlur={handleBlur}
							/>
							{errors?.[ele.name] && (
								<p className="error">
									{errors[ele.name]}
								</p>
							)}
						</div>
					))}
					<button
						onClick={handleFormSubmit}
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Submit"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default FormData;
