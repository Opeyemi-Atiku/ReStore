import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

interface Props {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

const navStyles = {
  color: "inherit",
  textDecoration: 'none',
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({darkMode, setDarkMode}: Props) {
    const {basket} = useStoreContext()
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
    function handleChange() {
        setDarkMode(!darkMode)
    }

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink} to='/' sx={navStyles}>RE-STORE</Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                    />
                </Box>
                   

                <List sx={{ display: "flex" }}>
                    {midLinks.map(({ title, path }) => (
                    <ListItem
                        key={path}
                        sx={navStyles}
                        component={NavLink}
                        to={path}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                    ))}
                </List>


                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to="/basket" size="large" edge="start" color="inherit" sx={{mr:2}}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: "flex" }}>
                        {rightLinks.map(({ title, path }) => (
                        <ListItem
                            key={path}
                            sx={navStyles}
                            component={NavLink}
                            to={path}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                        ))}
                    </List>
                </Box>
                    
            </Toolbar>
        </AppBar>
    );
}