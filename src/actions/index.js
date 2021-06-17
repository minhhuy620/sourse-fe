import * as Types from './../constants/ActionType';
import callApi from './../utils/callApi'

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products', 'GET', null).then(res => {
            dispatch(GetAllProduct(res.data));
            console.log(res.data);
        });
    }
}
export const GetAllProduct = (products) =>{
    return{
        type: Types.GET_ALL_PRODUCT,
        products
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}