import DynamicForm from "./DynamicForm";
import fields from "../../config/field-set";
import { render, screen, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("<DynamicForm /> spec", () => {
	const handleSubmit = jest.fn();
	const handleChange = jest.fn();
	// beforeEach(() => {
	// 	handleSubmit.mockClear();
	// 	handleChange.mockClear();
	// });

	it("should have been submitted correctly", () => {
		render(
			<DynamicForm
				formData={fields}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		);
		fireEvent.click(screen.getByText(/submit/i));
		expect(handleSubmit).toBeCalledTimes(1);
	});
});
