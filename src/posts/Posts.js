import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
   button: {
    margin: theme.spacing.unit,
    textTransform: 'none',
    textDecoration: 'none',
    maxWidth: '80%',
    minWidth: '13%'
  },
});


const Posts = (posts) => {

    const { classes } = posts;

    return (
        <div>
            {
                posts.posts.map((post, key) => {
                	console.log(post.data)
                    return(
                        <Paper 
                            key={key} 
                            className={classes.root} 
                            elevation={1}
                            data-subreddit={post.data.subreddit}
                            >
                            <Typography component="p">
                                <a href={post.data.url} >
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        {post.data.subreddit}
                                    </Button>
                                    <Button variant="contained" className={classes.button}>
                                        {post.data.title}
                                    </Button>
                                    
                                </a>
                            </Typography>
                        </Paper>
                    )
                })
            }
        </div>
    );
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Posts);