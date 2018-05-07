const initialState = {
	highlights: [],
	isLoading: false,
	isError: false
}

const highlightsReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case 'ALL_HIGHLIGHTS_PENDING':
			return {...state, isLoading:true};
		case 'ALL_HIGHLIGHTS_FULFILLED':
			return {...state, isLoading:false, highlights: action.payload.data};
		case 'ALL_HIGHLIGHTS_REJECTED':
			return {...state, isLoading:false, isError: true};
	
		default:
			return state;
	}
}

export default highlightsReducer