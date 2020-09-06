import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
    
  const Post = (props) => {
    const {id,title,body} =props;
    const postStyle={
      border:'none',
      boxShadow:'2px 2px 5px gray',
      backgroundColor:'lightblue',
      height:'410px',
    }
      return (  
    <Container>
      <Card style={postStyle}  variant="outlined">
        <CardContent>
        <Typography>
        <h2>id:{id}</h2>
        </Typography>
          <Typography>
               <h2>title:{title} </h2>
          </Typography>
          <Typography>
               <h5>post:{body} </h5>
          </Typography>
        </CardContent>
         <CardActions style={{marginLeft:"25%"}} >
       <Link style={{textDecoration:"none"}} to={`/post/${id}`}>
       <Button size="small" variant="contained" color="secondary">See More Details</Button>
      </Link> 
         </CardActions>
      </Card>
       </Container>
    
    ); 
  }

export default Post;

   