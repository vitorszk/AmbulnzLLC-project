import React, { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { GlobalStateContext } from "../global/GlobalStateContext"
import PIZZA from "../assets/PIZZA.jpg"

const CardComponent = () => {
  const { pizzas, setPizzas, getMenu } = useContext(GlobalStateContext)

  useEffect(() => {
    getMenu()
  }, [])


  return (
    (pizzas.map((pizza) => {
      return (
        <Card sx={{ width: 300, height: 325 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={PIZZA}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pizza.ingredients}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )
    }))

  );
}

export default CardComponent