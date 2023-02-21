import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import { Badge } from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

export default function Header({ showCart, totalCarts }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={totalCarts} color="error" onClick={showCart}>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
