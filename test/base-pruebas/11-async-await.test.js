import { getImage } from "../../src/base-pruebas/11-async-await";

describe("Test 11-async-await", () => {
	test("getImage must return an url", async () => {
		const url = await getImage();

		expect(typeof url).toBe("string");
	});
});
