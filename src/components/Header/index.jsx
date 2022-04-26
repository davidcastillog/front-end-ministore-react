import { useContext } from "react";
import CartContext from "../../Context";
import { useLocation, Link } from "react-router-dom";
import * as React from "react";
import StoreLogo from "../../assets/images/techlogo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  // Context for cart state
  const { cartItems } = useContext(CartContext);

  // Get the current location of the page for the breadcrumbs
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ height: "65px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            ></IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            ></Menu>
          </Box>
          {/* Store Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ height: "50px", mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <img src={StoreLogo} alt="store-logo" height={50} />
            </Link>
          </Typography>
          {/* Store Logo for Small Screens */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              height: "50px",
              ml: 4,
              display: { xs: "flex", md: "none" }
            }}
          >
            <Link to="/">
              <img src={StoreLogo} alt="store-logo" height={50} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          {/* Cart Icon */}
          <Box sx={{ flexGrow: 0 }}>
            <MenuItem>
              <IconButton size="large" aria-label="Cart" color="inherit">
                <Badge badgeContent={cartItems.count} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Box>
        </Toolbar>
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">
            <HomeIcon sx={{ mr: 0.5 }} color="inherit" fontSize="inherit" />
          </Link>
          <Typography
            variant="overline"
            component={Link}
            to={"/"}
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Product List
          </Typography>
          {!isHomePage && (
            <Typography variant="overline" color="inherit">
              Product Details
            </Typography>
          )}
        </Breadcrumbs>
      </Container>
    </AppBar>
  );
}

export default Header;
