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

export const funTotalQuantity = a => {
  return String(Number(a) + 1);
};

export const funTotal = (price, total) => {
  const numberTotal = Number(price) + Number(total);
  return String(Math.round(numberTotal * 100) / 100);
};
export const funSubTotalQuantity = a => {
  return String(Number(a) - 1);
};

export const funSubTotal = (price, total) => {
  const numberTotal = Number(total) - Number(price);
  return String(Math.round(numberTotal * 100) / 100);
};

export const funDelTotalQuantity = (quantity, counter) => {
  return String(Number(quantity) - Number(counter));
};

export const funDelTotal = (price, total, counter) => {
  const numberTotal = Number(total) - Number(price) * Number(counter);
  return String(Math.round(numberTotal * 100) / 100);
};

export const totalQuantityFan = arr => {
  // Проверяем, есть ли элементы в массиве
  const isOrder = Boolean(arr.length);
  if (!isOrder) {
    return;
  }

  // Ищем объект с `status === 'Pending'`
  const foundItem = arr.find(el => el.status === 'Pending');

  // Если объект найден и у него есть свойство `totalQuantity`, возвращаем его
  if (foundItem && foundItem.totalQuantity) {
    return String(foundItem.totalQuantity);
  }

  // Если объект не найден или у него нет `totalQuantity`, возвращаем "0"
  return '0';
};
