import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("<FirstApp /> Test", () => {
	const title = "Hi";
	const subTitle = "This is a subtitle";
	test("should match with the snapshot", () => {
		const { container } = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('should show the message "Hi"', () => {
		render(<FirstApp title={title}></FirstApp>);

		expect(screen.getByText(title)).toBeTruthy();
	});

	test("should show the tittle in an h1", () => {
		render(<FirstApp title={title}></FirstApp>);
		expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
	});

	test("should show the subtitle send by props", () => {
		render(<FirstApp title={title} subTitle={subTitle}></FirstApp>);

		expect(screen.getByText(subTitle)).toBeTruthy();
	});
});
