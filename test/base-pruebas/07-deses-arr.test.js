import { returnArray } from "../../src/base-pruebas/07-deses-arr";

describe("Test in 07-deses-arr", () => {
	test("must return a string and a number", () => {
		const [characters, numbers] = returnArray();

		expect(characters).toBe("ABC");
		expect(numbers).toBe(123);

		expect(typeof characters).toBe("string");
		expect(typeof numbers).toBe("number");

		expect(characters).toEqual(expect.any(String));
	});
});
