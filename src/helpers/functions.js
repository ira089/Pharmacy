export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const allFieldsFilled = data => {
  return Object.values(data).every(field => field.trim() !== '');
};

export const funTotal = (price, total) => {
  const numberTotal = Number(price) + Number(total);
  return numberTotal.toFixed(2);
};

export const funSubTotal = (price, total) => {
  const numberTotal = Number(total) - Number(price);
  return numberTotal.toFixed(2);
};

export const funDelTotalQuantity = (quantity, counter) => {
  return String(Number(quantity) - Number(counter));
};

export const funDelTotal = (price, total, counter) => {
  const numberTotal = Number(total) - Number(price) * Number(counter);
  return numberTotal.toFixed(2);
};

export const totalQuantityFan = arr => {
  if (!Array.isArray(arr)) {
    return;
  }
  const isOrder = Boolean(arr.length);
  if (!isOrder) {
    return;
  }
  const foundItem = arr.find(el => el.status === 'Pending');
  if (foundItem && foundItem.totalQuantity) {
    return String(foundItem.totalQuantity);
  }
  return '0';
};
