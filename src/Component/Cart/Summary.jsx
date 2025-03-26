export const Summary = ({ cartItems }) => {
  // Ensure cartItems is an array
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return <div>Error: Invalid cartItems data</div>;
  }

  // Handle empty cart scenario
  if (cartItems.length === 0) {
    return <div className="text-center text-white">Your cart is empty.</div>;
  }

  // Calculate the total amount based on price and quantity
  const totalAmount = cartItems.reduce((account, item) => {
    return account + item.price * item.quantity;
  }, 0);

  // Calculate tax (2% of total amount)
  const tax = totalAmount * 0.02;

  // Calculate total items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price including tax
  const totalPrice = totalAmount + tax;

  return (
    <div className="text-center md:w-full text-white">
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3>SubTotal:</h3>
          <h3>${totalAmount.toFixed(2)}</h3>
        </div>

        <div className="flex justify-between">
          <h3>Tax (2%):</h3>
          <h3>${tax.toFixed(2)}</h3>
        </div>

        <div className="flex justify-between">
          <h3>Total Items:</h3>
          <h3>{totalItems}</h3>
        </div>

        <div className="flex justify-between">
          <p>Total Price:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>

        <button className="md:mt-16 mt-5 mb-2 p-2 md:mr-6 bg-blue-500 rounded-lg md:w-full w-22">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
