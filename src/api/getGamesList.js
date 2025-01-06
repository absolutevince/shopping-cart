const URL = "https://api.rawg.io/api/games?key=f008b5f591794723b4303e2b1bb23169"

export default function getGamesList(page) {
	const url = page === undefined ? URL : URL + `&page=${page}`;
	async	function getGames() {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data)
		return data

	}

	return getGames(page)
}
