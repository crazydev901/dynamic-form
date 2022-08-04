import React from "react";
import PropTypes from "prop-types";
import InputField from "../InputField/InputField";

const DynamicForm = ({ formData, handleSubmit, handleChange }) => (
	<form className="py-10 px-7 w-full" onSubmit={handleSubmit}>
		<div className="flex flex-wrap -mx-3 mb-6">
			{formData.length
				? formData.map((field, index) => (
						<InputField
							key={field.id}
							{...field}
							onChange={(value) => handleChange(value, index)}
						/>
				  ))
				: null}
		</div>
		<div className="flex flex-wrap -mx-3 mb-6">
			<div className="w-full sm:w-full px-3 mb-6 md:mb-0 text-center">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full sm:w-1/3"
					data-testid="submit-dynamic-form"
				>
					Submit
				</button>
			</div>
		</div>
	</form>
);

export default DynamicForm;

DynamicForm.propTypes = {
	formData: PropTypes.array,
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.func,
};
