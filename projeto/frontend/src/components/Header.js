import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Title  } from './styles';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'rgba(55,55,55, 0.95)' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Title>
                        <h1>Ambulnz Pizzas</h1>
                        <Button color="inherit">
                            <ShoppingCartIcon className="cart_icon"/>
                        </Button>
                    </Title>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header