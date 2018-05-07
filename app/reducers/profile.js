const initialState = {
	profiles: [],
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
	
		default:
			return state;
	}
}

export default profilesReducer