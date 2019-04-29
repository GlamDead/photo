export const changeButton = (bool) => {
    return {
        type: 'BUTTON_IS_CLICK',
        payload: bool
    }
}

export const changeAccessToken = (text) => {
    return {
        type: 'CHANGE_ACCESS_TOKEN',
        payload: text
    }
}

export const changeUserId = (text) => {
    return {
        type: 'CHANGE_USER_ID',
        payload: text
    }
}

export const changeNameUser = (text) => {
    return {
        type: 'CHANGE_USERNAME',
        payload: text
    }
}

export const changeTextNameBar = (text) => {
    return {
        type: 'CHANGE_TEXT_NAMEBAR',
        payload: text
    }
}

export const changeNameAlbum = (text) => {
    return {
        type: 'CHANGE_NAME_ALBUM',
        payload: text
    }
}

export const changeIdAlbum = (text) => {
    return {
        type: 'CHANGE_ID_ALBUM',
        payload: text
    }
}

export const changePhotoName = (text) => {
    return {
        type: 'CHANGE_PHOTO_NAME',
        payload: text
    }
}

export const plusPage = () => {
    return {
        type: 'PLUS_PAGE'
    }
}

export const minusPage = () => {
    return {
        type: 'MINUS_PAGE'
    }
}

export const changeAlbumList = (array) => {
    return {
        type: 'CHANGE_ALBUMS',
        payload: array
    }
}

export const changePhotosList = (array) => {
    return {
        type: 'CHANGE_PHOTOS',
        payload: array
    }
}

export const changeShowPhotos = (array) => {
    return {
        type: 'CHANGE_SHOW_PHOTOS',
        payload: array
    }
}

export const changeLoading = (bool) => {
    return {
        type: 'CHANGE_LOADING',
        payload: bool
    }
}

export const changePhoto = (text) => {
    return {
        type: 'CHANGE_PHOTO',
        payload: text
    }
}