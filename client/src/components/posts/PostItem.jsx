import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Button,
  Avatar,
  IconButton,
  Tooltip,
  Zoom,
  Divider,
} from '@material-ui/core';
import { ThumbUp as ThumbUpIcon, Flag as FlagIcon } from '@material-ui/icons';

const styles = theme => ({
  root: {
    margin: '12px 0',
  },
  postThumbIconLiked: { color: theme.palette.primary.main },
  postThumbIconUnliked: { color: 'grey' },
  flagIconFlagged: { color: theme.palette.secondary.main },
  flagIconUnFlagged: { color: 'grey' },
  postCompany: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  postAvatar: {
    margin: '0 auto',
    width: 70,
    height: 70,
  },
  postName: {
    textAlign: 'center',
    marginTop: '2px 0',
  },
  postProfession: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    marginLeft: '12px',
  },
  comment: {
    padding: '24px 0',
  },
});

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
  isLiked,
  isFlagged,
  showActions,
  onLikeHandleClick,
  onFlagHandleClick,
  onReplyHandleClick,
  onDeleteHandleClick,
  classes,
}) => {
  const onLike = () => {
    onLikeHandleClick(_id);
  };

  const onFlag = () => {
    onFlagHandleClick(_id);
  };

  const onReply = () => {
    onReplyHandleClick(name);
  };

  const onDelete = id => {
    onDeleteHandleClick(_id);
  };
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" alignItems="center">
        <Grid item xs={3}>
          <Grid container direction="column" justify="center">
            <Link to={`/profile/${name}`}>
              {/* <Avatar src={`/${post.user.image}`} className={classes.postAvatar} /> */}
              <Avatar className={classes.postAvatar} />
            </Link>
            <Typography
              component={Link}
              to={`/profiles/${name}`}
              color="primary"
              className={classes.postName}
            >
              {name}
            </Typography>
            <Typography variant="caption" className={classes.postProfession}>
              Pastry Chef
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={9}>
          <Grid container justify="center">
            <Grid item xs={12} className={classes.comment}>
              <Typography variant="body1">{text}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Fragment>
                <Tooltip
                  title={`${likes.length} chef(s) liked this comment`}
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton onClick={onLike}>
                    <ThumbUpIcon
                      className={
                        isLiked
                          ? classes.postThumbIconLiked
                          : classes.postThumbIconUnliked
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="flag comment as inappropriate"
                  placement="top"
                  TransitionComponent={Zoom}
                >
                  <IconButton onClick={onFlag}>
                    <FlagIcon
                      className={
                        isFlagged
                          ? classes.flagIconFlagged
                          : classes.flagIconUnflagged
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={onReply}
                  className={classes.button}
                >
                  Reply
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onDelete}
                  className={classes.button}
                >
                  Delete Comment
                </Button>
              </Fragment>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  // auth: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostItem);
