import { render } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("<CounterApp /> Tests", () => {
	const initialValue = 10;

	test("should match the snapshot", () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});
});
