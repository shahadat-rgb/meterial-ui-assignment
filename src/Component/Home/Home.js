import React, { useState, useEffect } from 'react';
import { Grid,} from '@material-ui/core';
import Post from '../Post/Post';



const Home = () => {
    const [post,seetPost] =useState([]);
       useEffect(()=>{
       fetch('http://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => seetPost(data))
 
    },[])
    return (
        <>
            
           <h1 style={{textAlign:'center'}}>Differents Post</h1>
        <Grid container spacing={2}>
          {post.map(pt =><Grid item  md={4}>

    <Post id={pt.id}  title={pt.title} body={pt.body}/>

        </Grid>
         )}
        </Grid>
         

    </>
       
      

  );
}

    
export default Home;
