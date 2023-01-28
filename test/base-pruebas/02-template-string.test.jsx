import getGreeting from "../../src/base-pruebas/02-template-string";

describe("Test in 02-template-string", () => {
	test('getGreetings must return "Hello Daniel"', () => {
		const name = "Daniel";
		const message = getGreeting(name);

		expect(message);
	});
});
