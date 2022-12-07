export const apiSwitch = (state, action) => {
    switch(action.type) {
        case 'TEMA_CLARO':
            return {url: action.payload, api: 'dog'}
        case 'TEMA_OSCURO':
            return {url: action.payload, api: 'cat'}
        default: 
            throw new Error()
    }
}