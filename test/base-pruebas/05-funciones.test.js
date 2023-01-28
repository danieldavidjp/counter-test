import { getUser, getActiveUser } from "../../src/base-pruebas/05-funciones";

describe("Test in 05-funciones", () => {
	test("getUser must return an object", () => {
		const testUser = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

		const user = getUser(testUser);

		expect(user).toEqual(testUser);
	});

	test("getActiveUser must return an object", () => {
		const name = "Daniel";
		const testObject = {
			uid: "ABC567",
			username: name,
		};

		expect(getActiveUser(name)).toEqual(testObject);
	});
});
