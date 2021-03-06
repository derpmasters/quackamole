import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, useMediaQuery} from '@material-ui/core';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 314,
    height: 400,
    border: 'solid 1px lightgrey',
    backgroundColor: 'white'
  },
  smallScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 314,
    height: 400,
    border: 'solid 1px lightgrey',
    backgroundColor: 'white',
    margin: 8
  },
  alignTitle: {
    display: 'flex',
    alignItems: 'center',
    margin: 24
  },
  customizeTitle: {
    fontWeight: 'bold',
    fontSize: '25px',
    marginLeft: 4
  },
  customizeIcon: {
    marginRight: 4,
    color: 'rgb(46, 125, 50)'
  },
  customizeText: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16
  }
});

const BulletPoint = (props) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width: 950px)');

  const checkIcons = (icon) => {
    if (icon === 'VideogameAssetIcon') {
      return <VideogameAssetIcon fontSize='large' className={classes.customizeIcon}/>;
    } else if (icon === 'AssessmentOutlinedIcon') {
      return <AssessmentOutlinedIcon fontSize='large' className={classes.customizeIcon}/>;
    } else if (icon === 'CallOutlinedIcon') {
      return <CallOutlinedIcon fontSize='large' className={classes.customizeIcon}/>;
    }
  };

  return (
    <div className={smallScreen ? classes.smallScreenContainer : classes.container}>
      <div className={classes.alignTitle}>
        {checkIcons(props.content.icon)}
        <Typography variant='h4' className={classes.customizeTitle}>{props.content.title}</Typography>
      </div>
      <Typography className={classes.customizeText} align='center'>{props.content.text}</Typography>
      <img src={props.content.image} height='181' width='275' alt='icon'/>
    </div>
  );
};
export default BulletPoint;
