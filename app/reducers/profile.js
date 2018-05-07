const initialState = {
	profiles: [],
	profile: {},
	isLoading: false,
	isError: false
}

const profilesReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case 'ALL_PROFILES_PENDING':
			return {...state, isLoading:true};
		case 'ALL_PROFILES_FULFILLED':
			return {...state, isLoading:false, profiles: action.payload.data};
		case 'ALL_PROFILES_REJECTED':
			return {...state, isLoading:false, isError: true};

		case 'GET_PROFILE_PENDING':
			return {...state, isLoading:true};
		case 'GET_PROFILE_FULFILLED':
			return {...state, isLoading:false, profile: action.payload.data};
		case 'GET_PROFILE_REJECTED':
			return {...state, isLoading:false, isError: true};
	
		default:
			return state;
	}
}

export default profilesReducer