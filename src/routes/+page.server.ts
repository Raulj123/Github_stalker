export const actions = {
	getData: async ({ request, params }) => {
		const { user } = Object.fromEntries(await request.formData()) as {
			user: string;
		};
		try {
			const url = `https://api.github.com/users/${user}`;

			const res = await fetch(url);
			const data_user = await res.json();
			console.log(data_user);
			return data_user;
		} catch (error) {
			console.log('Error:', error);
		}
	}
};
