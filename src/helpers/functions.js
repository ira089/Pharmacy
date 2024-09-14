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

export const calculateTotals = products => {
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

// const newTotalQuantity = String(Number(totalQuantity) + Number(counter));
// console.log(newTotalQuantity);
// const numberTotal = Number(counter) * Number(price) + Number(total);

// const newTotal = String(Math.round(numberTotal * 100) / 100);

// const newTotalQuantity = String(Number(totalQuantity) + Number(counter));
// console.log(newTotalQuantity);
// const newTotal = String(counter * price + Number(total));

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
