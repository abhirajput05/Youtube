const GOOGLE_API_KEY="AIzaSyCR5oFJ4FdZX181yI2RO8WvWvm8FeFrvzg";
export const API_KEY="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key="+GOOGLE_API_KEY;
export const SEARCH_API = 'https://auto-suggest-queries.p.rapidapi.com/suggestqueries?query=';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f78f96eae5msh39e7c291ccc2f20p1ac24ejsnc73257da091e',
		'X-RapidAPI-Host': 'auto-suggest-queries.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(SEARCH_API, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }