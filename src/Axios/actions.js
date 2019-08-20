// forking action along with data
export const pass = (type, json) => ({
	type,
	payload: json
});

// forking action
export const say = (type) => ({
	type
});
