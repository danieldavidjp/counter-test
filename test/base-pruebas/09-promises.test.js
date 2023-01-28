import { getHeroByIdAsync } from "../../src/base-pruebas/09-promises";

describe("Test in 09-promises", () => {
	test("getHeroByIdAsync must return a hero object", (done) => {
		const id = 1;
		getHeroByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: "Batman",
				owner: "DC",
			});
			done();
		});
	});
	test("getHeroByIdAsync must return an error", (done) => {
		const id = 10;
		getHeroByIdAsync(id).catch((error) => {
			expect(error).toBe(`couldn't find hero ${id}`);
			done();
		});
	});
});
