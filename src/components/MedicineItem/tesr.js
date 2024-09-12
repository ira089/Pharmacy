// const addToCart = counter => {
//   const newTotalQuantity = String(totalQuantity + counter);
//   const newTotal = String(counter * price + Number(total));
//   if (id) {
//     dispatch(
//       updOrderThunk(id, {
//         total: newTotal,
//         totalQuantity: newTotalQuantity,
//         status: 'Pending',
//       })
//     );
//     dispatch(
//       addOrderItemThunk({
//         idOrder: id,
//         idProduct: _id,
//         quantity: counter,
//       })
//     );
//     return;
//   }
//   dispatch(
//     addOrderThunk({
//       total: newTotal,
//       totalQuantity: newTotalQuantity,
//       status: 'Pending',
//     })
//   );
//   dispatch(
//     addOrderItemThunk({
//       idOrder: id,
//       idProduct: _id,
//       quantity: counter,
//     })
//   );
// };
