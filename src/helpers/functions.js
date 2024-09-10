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

export const calculateTotals = (products) => {
  const result = products.reduce(
    (acc, product) => {
      const { quantity, price } = product;
      const parsedPrice = parseFloat(price); // преобразуем цену в число

      acc.total += quantity * parsedPrice; // вычисляем total
      acc.totalQuantity += quantity; // вычисляем totalQuantity

      return acc;
    },
    { total: 0, totalQuantity: 0 } // начальные значения
  );

  return result;
};
