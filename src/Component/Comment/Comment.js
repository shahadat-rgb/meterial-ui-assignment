import React from 'react';
import { Card, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    replyBtn: {
      color: "black",
    },
    picture:{
        borderRadius:"50%",
        marginRight:"10px"
    },
    commentHeadline:{
        display:"flex",
        alignItems:"center",
        color:"blue"
    },
    commentSection:{
        margin:"0 0 0 50px",
       
    },
    mainComment:{
        marginBottom:"10px"
    },
       mainContainer:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        marginTop:"10px",
        backgroundColor:"pink"
    }
  });
const Comment = (props) => {
    const classes = useStyles();
    const {name}=props.comment
    const {img,nickName}=props.picture
    return (
        <div className={classes.mainComment}>
            <Card className={classes.mainContainer}>
                
                <CardContent>
                <div className={classes.commentHeadline}>
                    <img className={classes.picture} src={img} alt=""/> <b>{nickName}</b>
                </div> 
                <p className={classes.commentSection}>{name}</p>
                </CardContent>
                <CardActions>
                    <Button className={classes.replyBtn} variant="contained">Reply</Button>
                </CardActions>
            </Card>
            
           
        </div>
        
    );
};

export default Comment;