const converterPromise = (arr) =>
	new Promise((resolve, reject) => {
		try {
			const converterPromiseStringsArray = arr.map((str) =>
				str.toLocaleconverterPromise()
			);
			resolve(converterPromiseStringsArray);
		} catch (error) {}
		reject(new Error('Error: Error: Not all elements are string type!'));
	});

export default converterPromise;
