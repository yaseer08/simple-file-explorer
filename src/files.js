let data = {
	Root: {
		Songs: {
			"Hey, Ma": {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
			"In a River": {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
			Rasputin: {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
		},
		Movies: {
			Inception: {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
			"About Time": {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
			"Once Upon A Time...In Hollywood": {
				"index.html": true,
				"index.js": true,
				Assets: {
					"img1.png": true,
					"img2.png": true,
				},
				Config: {
					"environment.ts": true,
					"config.json": true,
				},
			},
		},
		Videos: {},
		Screenshots: {},
	},
};

export function getContent(path, obj = data) {
	if (path.length > 0) {
		let firstKey = path.shift();
		return getContent(path, obj[firstKey]);
	} else {
		return obj;
	}
}


export function formObj(obj = {}, arr, key, type) {
	if (arr.length === 0) {
		obj[key] = type === 'file' ? true : {}
		return obj;
	}
	else {
		let objKey = arr[0]
		obj[objKey] = {};
		return { [objKey]: formObj(obj[objKey], arr.slice(1, arr.length), key, type) }
	}
}

export default data;
