import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCarts } from "../../redux/saga/products/productSlice"
import CartItem from "../cartItem/cartItem"
import { Wrapper } from "./cart.styles"

const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  showCart,
  handleRemoveItem,
}) => {
  const dispatch = useDispatch()
  const cartTotal = (items) => {
    return items.reduce((acc, item) => acc + item.amount * item.price, 0)
  }

  const cartCount = (items) => {
    return items.reduce((acc, item) => acc + item.amount, 0)
  }

  const clearCart = () => {
    dispatch(setCarts([]))
  }

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems?.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <h2>Total: ${cartTotal(cartItems)?.toFixed(2)}</h2>
      <h4>Total Items: {cartCount(cartItems)}</h4>
      {cartItems.length !== 0 ? (
        <div className="clear-btn">
          <Button variant="contained" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      ) : (
        <div className="clear-btn">
          <Button variant="contained" onClick={showCart}>
            Go to purchase
          </Button>
        </div>
      )}
    </Wrapper>
  )
}

export default Cart
