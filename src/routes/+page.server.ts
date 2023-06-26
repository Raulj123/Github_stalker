export const user_info = [
	{
		avatar_url: 'https://avatars.githubusercontent.com/u/112786129?v=4',
		url: 'https://api.github.com/users/Raulj123',
		followers_url: 'https://api.github.com/users/Raulj123/followers',
		following_url: 'https://api.github.com/users/Raulj123/following{/other_user}',
		repos_url: 'https://api.github.com/users/Raulj123/repos',
		name: 'Raul Jarquin',
		company: null,
		blog: 'linkedin.com/in/rauljarquin',
		location: 'Southern California',
		bio: "Computer Science at CSUF. '24",
		twitter_username: null,
		public_repos: 37,
		public_gists: 0,
		followers: 4,
		following: 1,
		created_at: '2022-09-04T00:10:25Z',
		updated_at: '2023-06-20T05:05:09Z',
		show: 'To show me blah',
		login: 'Raulj123'
	}
];
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	return { user_info };
};

export const actions = {
	getData: async ({ request }) => {
		const { user } = Object.fromEntries(await request.formData()) as {
			user: string;
		};
		try {
			const url = `https://api.github.com/users/${user}`;

			const res = await fetch(url);
			const user_data = await res.json();
			user_info.splice(0);
			user_info.push(user_data);
			return user_data;
		} catch (error) {
			console.log('Error:', error);
		}
	}
};
