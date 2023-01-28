export const getImage = async () => {
	try {
		const apiKey = "TY8mQlOu8gUJQGfS392WKetEEiHvoZ3M";
		const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await resp.json();

		const { url } = data.images.original;

		return url;
	} catch (error) {
		// Error Handling
		return "Image not found";
	}
};
