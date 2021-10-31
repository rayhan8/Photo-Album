import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import useStyles from './style';

const cards=[1,2,3,4,5,6,7,8,9,10,11,12];

function App() {
 const classes = useStyles();
 return (
  <>
  
  <CssBaseline/>
  <AppBar position="relative"> 
   <Toolbar>
    <DevicesOtherIcon className={classes.icon}/>
    <Typography variant="h6">
     Kitsware Technology
    </Typography>
   </Toolbar>
  </AppBar>

  <main>
   <div className={classes.container}>
    <Container maxWidth='sm'>

     <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
      About us
     </Typography>

     <Typography variant="h5" align='center' color='textSecondary' paragraph>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe dolores praesentium incidunt voluptatem sapiente est aperiam aliquam minima, vero consequuntur?
     </Typography>

     <div className={classes.buttons}>
      <Grid container spacing={2} justify='center'>
       <Grid item>
        <Button variant='contained' color='primary'>
         Our Projects
        </Button>
       </Grid>
       <Grid item>
        <Button variant='outlined' color='primary'>
         Contact Us
        </Button>
       </Grid>
      </Grid>
     </div>

    </Container>
   </div>

  <Container className={classes.cardGrid} maxWidth="md">
   <Grid container spacing={4}>

    {cards.map((card)=>(
    <Grid item key={card} xs={12} sm={6} md={4}>
     <Card className={classes.card}>
      <CardMedia
      className={classes.cardMedia}
      image="https://source.unsplash.com/random"
      title="Image Title"
      />
      <CardContent className={classes.cardContent}>
       <Typography gutterBottom variant="h5">
        Project Heading
       </Typography>
       <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, sapiente!
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small" color="primary">View</Button>
       <Button size="small" color="primary">Order</Button>
      </CardActions>
     </Card>
    </Grid>
    ))}
    
   </Grid>

  </Container>

  </main>

  <footer className={classes.footer}>
   <Typography variant="h6" align="center" gutterBottom>
    Kitsware
   </Typography>
   <Typography variant="subtitle1" align="center" color="textSecondary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, corrupti!
   </Typography>
  </footer>

  </>
 )
}

export default App
