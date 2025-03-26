import {Box, Button, Card, CardActionArea, CardActions, CardContent, Typography} from "@mui/material";


const PokemonCard = ({item}) => {
    return (<Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <Box>
                <img src={item.sprites.front_default}/>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    nombre: {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    peso: {item.weight}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    tipo: {item.types[0].type.name}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
        </CardActions>
    </Card>

    )
}
export default PokemonCard;
