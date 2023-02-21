import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Drawer,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart from "../components/cart/cart"
import Header from "../components/header"
import ProductImage from "../components/productCard"
import { setCarts } from "../redux/saga/products/productSlice"
import { PRODUCT_REQUEST } from "../redux/saga/type"

export default function Products() {
  const dispatch = useDispatch()
  const { products = [], carts = [] } = useSelector((state) => state.products)
  const [showCart, setShowCart] = useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setShowCart({ ...showCart, [anchor]: open })
  }

  const getProducts = () => {
    dispatch({
      type: PRODUCT_REQUEST,
    })
  }

  useEffect(() => {
    getProducts()
  }, [])

  const cartItemData = (clickedItem) => {
    const isItemInCart = carts.find((item) => item.id === clickedItem.id)
    if (isItemInCart) {
      return carts.map((item) =>
        item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
      )
    }
    return [...carts, { ...clickedItem, amount: 1 }]
  }

  const handleAddToCart = (clickedItem) => {
    dispatch(setCarts(cartItemData(clickedItem)))
  }

  const handleRemoveCart = (id) => {
    const removeCarts = carts.reduce((acc, item) => {
      if (item.id === id) {
        if (item.amount === 1) return acc
        return [...acc, { ...item, amount: item.amount - 1 }]
      } else {
        return [...acc, item]
      }
    }, [])
    dispatch(setCarts(removeCarts))
  }

  const handleRemoveItem = (id) => {
    const removeItem = carts.filter((item) => item.id !== id)
    dispatch(setCarts(removeItem))
  }

  const getTotalCarts = () => carts.reduce((acc, item) => acc + item.amount, 0)

  return (
    <>
      <Header
        showCart={toggleDrawer("right", true)}
        totalCarts={getTotalCarts(carts)}
      />
      <div className="product">
        <div className="title">
          <h5>Our Products</h5>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2, sm: 2 }}>
            {products.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={item?.id}
                className="product-grid"
              >
                <Card className="product-card">
                  <ProductImage item={item} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="addToCart">
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleAddToCart(item)}
                    >
                      ADD TO CART
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Drawer
          anchor={"right"}
          open={showCart["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <Cart
            cartItems={carts}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveCart}
            showCart={toggleDrawer("right", false)}
            handleRemoveItem={handleRemoveItem}
          />
        </Drawer>
      </div>
    </>
  )
}
