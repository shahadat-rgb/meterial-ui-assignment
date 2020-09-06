import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container   } from '@material-ui/core'
import Picture from '../../Picture/Picture'
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const  {postId} =useParams();
    const [postDetails,setPostDetails] =useState({})
    useEffect(()=>{
        const url=`http://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetails(data) )
    },[])
   
  const [comment,setComment] =useState([])
    useEffect(()=>{
        const url=`http://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])

const useStyle={
        margin:'0 auto',
        border:'none',
        boxShadow:'2px 2px 5px gray',
        width:'60%',
        backgroundColor:'lightgray',
        marginTop:'30px',
        padding:'10px',
        borderRadius:'10px',
      };
     
    return (
        <Container>
        <Card style={useStyle}  variant="outlined">
          <CardContent>
          <Typography>
          <h2>this is post details component:{postId}</h2>
          </Typography>
            <Typography>
                 <h3> <span style={{color:'red'}}>Post Title:</span>{postDetails.title} </h3>
            </Typography>
            <Typography>
                 <h5><span style={{color:'red'}}>Post:</span>{postDetails.body} </h5>
            </Typography>
          </CardContent>
        </Card>

        {
             comment.map((comment, i) => {
                const picture = Picture[Math.floor(Math.random() * Picture.length)];
                return (
                    <Comment key={comment.id} comment={comment} picture={picture}></Comment>
                );
              })
        }

        </Container>
    
 
    );
};

export default PostDetails;