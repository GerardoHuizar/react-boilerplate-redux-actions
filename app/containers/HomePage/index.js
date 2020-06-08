import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

import { injectSaga } from '../../utils/injectSaga';
import useStyles from './style';
import { mainSaga } from './saga';
import { setDataFromReddit } from './actions';
import { dataFromRedditSelector } from './selectors';

export function HomePage({ loading, actions, dataReddit }) {
  useEffect(() => {
    actions.setDataFromReddit();
  }, []);
  const classes = useStyles();

  return (
    <>
      <Grid container>
        {dataReddit &&
          dataReddit.map(card => (
            <Card className={classes.card} key={card.data.id}>
              <CardHeader
                avatar={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circle"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Avatar
                      alt="Ted talk"
                      src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                    />
                  )
                }
                action={
                  loading ? null : (
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  )
                }
                title={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                  ) : (
                    card.data.title
                  )
                }
                subheader={
                  loading ? (
                    <Skeleton animation="wave" height={10} width="40%" />
                  ) : (
                    card.data.author
                  )
                }
              />
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
              ) : (
                <CardMedia
                  className={classes.media}
                  image={card.data.thumbnail}
                  title="Ted talk"
                />
              )}

              <CardContent>
                {loading ? (
                  <React.Fragment>
                    <Skeleton
                      animation="wave"
                      height={10}
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </React.Fragment>
                ) : (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {
                      "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                    }
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
      </Grid>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  actions: PropTypes.any,
  dataReddit: PropTypes.any,
};

const mapStateToProps = state => ({
  dataReddit: dataFromRedditSelector(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setDataFromReddit,
    },
    dispatch,
  ),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({
  key: 'home',
  saga: mainSaga,
});

export default compose(
  withSaga,
  withConnect,
  memo,
)(HomePage);
