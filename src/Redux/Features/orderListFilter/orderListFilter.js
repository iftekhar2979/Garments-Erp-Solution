import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderFiltering: {
        filteredState: '',
        page: 0,
        isFiltered: false,
        urlOfOrders: 'http://localhost:8000/orderList?',
        isSearched: false,
        searchedKeyWords: '',
        filteredPageNumber: 0,
        searchPageNumber: 0,
        lastClicked: "",
        firstPage: 0,
        lastPage: 7
    },
    chalanFiltering: {
        page: 0,
        isSearched: '',
        searchedKeyWords: '',
        url: `http://localhost:8000/ChalanLists?page=0`,
        endPoints: '',
        searchPageNumber: 0,
        lastPage:7,
        firstPage:0,
        lastClickedRoute:''
    }
}
const orderListFilter = createSlice({
    name: 'orderListFilter',
    initialState,
    reducers: {
        filtering: (state, action) => {
            state.orderFiltering.filteredState = action.payload
            state.orderFiltering.isFiltered = true
        },
        changingPage: (state, action) => {
            state.orderFiltering.page = action.payload
        },
        urlChanging: (state, action) => {
            state.orderFiltering.urlOfOrders = action.payload
        },
        searchChanging: (state, action) => {
            state.orderFiltering.searchedKeyWords = action.payload
            state.orderFiltering.isSearched = true
        },
        clearSearching: (state, action) => {
            state.orderFiltering.searchedKeyWords = action.payload
            state.orderFiltering.isSearched = false
        },
        clearFiltering: (state, action) => {
            state.orderFiltering.filteredState = action.payload
            state.orderFiltering.isFiltered = false
        },
        filterPageChanging: (state, action) => {
            state.orderFiltering.filteredPageNumber = action.payload
        },
        searchingPageChanging: (state, action) => {
            state.orderFiltering.searchPageNumber = action.payload
        },
        chalanPageChanging: (state, action) => {
            state.chalanFiltering.page = action.payload
        },
        chalanSearching: (state, action) => {
            state.chalanFiltering.searchedKeyWords = action.payload
            state.chalanFiltering.isSearched = true
        },
        chalanUrlChanging: (state, action) => {
            state.chalanFiltering.url = action.payload
        },
        clearingChalanFilter: (state, action) => {
            state.chalanFiltering.searchedKeyWords = ''
            state.chalanFiltering.isSearched = false
        },
        lastClickedRoute: (state, action) => {
            let {filterName,value }=action.payload
            state[filterName].lastClicked = value
        },
        incrementFirstPage: (state, action) => {
            state[action.payload].firstPage += 1
        },
        decrementFirstPage: (state, action) => {
            state[action.payload].firstPage -= 1
        },
        lastPageIncrement: (state, action) => {
            state[action.payload].lastPage += 1
        },
        lastPageDecrement: (state, action) => {
            state[action.payload].lastPage -= 1
        }
    }
})
export default orderListFilter.reducer
export const { changingPage, filtering, urlChanging, searchChanging,
    clearSearching, clearFiltering, filterPageChanging,
    searchingPageChanging, chalanPageChanging,
    chalanSearching, chalanUrlChanging, clearingChalanFilter, lastClickedRoute,
    incrementFirstPage, decrementFirstPage, lastPageIncrement, lastPageDecrement } = orderListFilter.actions