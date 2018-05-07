import axios from 'axios'

export function allProfiles() {

	return {
		type: 'ALL_PROFILES',
		payload: axios({
			method: 'GET',
			url: 'https://api.backendless.com/098517CC-AB9E-8E8D-FF71-567AD8579900/62B5AEA6-36A5-13EA-FF8B-57B1D5F1F700/data/profiles'
		})
	}
}

export function getProfile() {

	return {
		type: 'GET_PROFILE',
		payload: axios({
			method: 'GET',
			url: 'https://api.backendless.com/098517CC-AB9E-8E8D-FF71-567AD8579900/62B5AEA6-36A5-13EA-FF8B-57B1D5F1F700/data/profiles/0029F8A0-5760-70E1-FF0A-CDB3DA913F00'
		})
	}
}