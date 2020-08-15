//función asincrona--tendencias
class GiphyAPI {
	async GetGiphy() {
		const apiResponse = await  fetch (
		`https://api.giphy.com/v1/gifs/trending?api_key=3fFbdAyTunA1vFkDs0HTeVwGidodcdaQ&limit=24&rating=G`
			);
		const gif=await apiResponse.json();
		return {
			gif
			};
}

	async searchGuifos(busqueda) {
		const apiResponse = await  fetch (
		`https://api.giphy.com/v1/gifs/search?api_key=3fFbdAyTunA1vFkDs0HTeVwGidodcdaQ&q=
		${busqueda}&limit=25&offset=0&rating=G&lang=en`
			);
		const gif=await apiResponse.json();
		//console.log("busquedaPalabra"+gif);
		return {
			gif
			};
}

async uploadGuifos(data) {

	const requestOptions =   {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: data
    };
 
	const result = fetch("https://upload.giphy.com/v1/gifs", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.error('error', error);
      });
    return result;
	};
}

