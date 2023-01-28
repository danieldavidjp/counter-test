//

test("Test on <DemoComponent />", () => {
	// 1. initialization
	const message1 = "hello world";
	// 2. estimulo
	const message2 = message1.trim();
	// 3. Assertion - Expected behavior
	expect(message1).toBe(message2);
});
