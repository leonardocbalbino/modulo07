export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id,
  };
}

export function updateFromCartRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateFromCartSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
