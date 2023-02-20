import { Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { Wrapper } from "./cartItem.styles.js"

const CartItem = ({ item, addToCart, removeFromCart, handleRemoveItem }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
          <Button
            size="small"
            disableElevation
            // variant="contained"
            onClick={() => handleRemoveItem(item.id)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <img src={item.thumbnail} alt={item.title} />
    </Wrapper>
  )
}

export default CartItem
