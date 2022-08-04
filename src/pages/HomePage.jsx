import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../hooks/useStore";
import fields from "../config/field-set";
import DynamicForm from "../components/DynamicForm/DynamicForm";

const Home = () => {
	const navigate = useNavigate();
	const { completionStore } = useStore();
	const [formData, setFormData] = useState([]);

	useEffect(() => {
		if (fields && fields?.length) {
			setFormData(
				fields.map((field) => {
					field.value = "";
					field.isError = false;

					return field;
				})
			);
		}
	}, []);

	const handleChange = (value, index) => {
		const dataCopy = formData.slice();
		dataCopy[index].value = value;

		setFormData(dataCopy);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const validatedFormData = formData.map((data) => {
			if (data.required && !data.value) {
				data.isError = true;
			} else {
				data.isError = false;
			}
			return data;
		});
		setFormData(validatedFormData);

		const hasError = validatedFormData.some((form) => form.isError);

		if (hasError) {
			return;
		}

		completionStore.setSubmittedForm(validatedFormData);
		navigate("/completion");

		alert("Submitted successfully!");
	};

	return (
		<>
			{formData.length && (
				<DynamicForm
					formData={formData}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};

export default Home;
