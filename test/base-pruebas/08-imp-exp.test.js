import { getHeroById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Test 08-imp-exp", () => {
	test("getHeroById must return a hero by Id", () => {
		const id = 1;
		const hero = getHeroById(id);

		expect(hero).toEqual({
			id: 1,
			name: "Batman",
			owner: "DC",
		});
	});

	test("getHeroById must return undefined", () => {
		const id = 7;
		const hero = getHeroById(id);

		expect(hero).toBeFalsy();
	});

	test("getHeroByOwner must return an array of heroes own by DC", () => {
		const owner = "DC";
		const heroes = getHeroesByOwner(owner);

		expect(heroes).toHaveLength(3);
		expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});

	test("getHeroByOwner must return an array of length 2", () => {
		const owner = "Marvel";
		const heroes = getHeroesByOwner(owner);

		expect(heroes).toHaveLength(2);
		expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
	});
});
