const initialState = {
    buttonIsClick : false,
    accessToken: '',
    userId: '',
    proxyUrl: "https://cors-anywhere.herokuapp.com/",
    nameAlbum: "album",
    idAlbum: "",
    textNameBar: "",
    nameUser: "user",
    page: 0,
    namePhoto: "",
    albums: [],
    photos: [],
    showPhotos: [],
    loadingState: false,
    photo: ""
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "BUTTON_IS_CLICK":
            return {...state, buttonIsClick: action.payload}
        case "CHANGE_ACCESS_TOKEN":
            return {...state, accessToken: action.payload}
        case "CHANGE_USER_ID":
            return {...state, userId: action.payload}
        case "CHANGE_USERNAME":
            return {...state, nameUser: action.payload}
        case "CHANGE_TEXT_NAMEBAR":
            return {...state, textNameBar: action.payload}
        case "CHANGE_NAME_ALBUM":
            return {...state, nameAlbum: action.payload}
        case "CHANGE_ID_ALBUM":
            return {...state, idAlbum: action.payload}
        case "CHANGE_PHOTO_NAME":
            return {...state, namePhoto: action.payload}
        case "PLUS_PAGE":
            return {...state, page: state.page + 1}
        case "MINUS_PAGE":
            return {...state, page: state.page - 1}
        case "CHANGE_ALBUMS":
            return {...state, albums: action.payload}
        case "CHANGE_PHOTOS":
            return {...state, photos: action.payload}
        case "CHANGE_SHOW_PHOTOS":
            return {...state, showPhotos: action.payload}
        case "CHANGE_LOADING":
            return {...state, loadingState: action.payload}
        case "CHANGE_PHOTO":
            return {...state, photo: action.payload}
        default:
            return state
    }
}