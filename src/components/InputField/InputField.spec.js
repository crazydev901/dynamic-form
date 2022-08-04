import React from "react";
import InputField from "./InputField";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("<InputField /> spec", () => {
	it("redners the component", () => {
		const container = render(
			<InputField
				label="Test"
				placeholder="test input"
				required
				type="text"
				value="test value"
				onChange={() => {}}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
