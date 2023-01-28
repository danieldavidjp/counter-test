import { getHeroById } from "./08-imp-exp";

export const getHeroByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Tarea
			// importen el
			const p1 = getHeroById(id);
			if (p1) {
				resolve(p1);
			} else {
				reject(`couldn't find hero ${id}`);
			}
		}, 500);
	});
};
