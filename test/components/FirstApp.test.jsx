import { render } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("<FirstApp /> Test", () => {
	// test("should match with the snapshot", () => {
	// 	const title = "Hi";
	// 	const { container } = render(<FirstApp title={title} />);

	// 	expect(container).toMatchSnapshot();
	// });

	test("should show the title in an H1", () => {
		const title = "Hi";
		const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

		expect(getByText(title)).toBeTruthy();

		// const h1 = container.querySelector("h1");
		// expect(h1.innerHTML).toBe(title);
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("should show the subtitle send by props", () => {
		const title = "Hi";
		const subtitle = "Subtitle";
		const { getByText } = render(<FirstApp title={title} subTitle={subtitle} />);
		console.log(getByText(subtitle));
		expect(getByText(subtitle)).toBeTruthy();
	});
});
