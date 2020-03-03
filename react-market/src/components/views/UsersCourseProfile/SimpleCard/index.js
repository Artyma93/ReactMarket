import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { userCourseProfile } = props;
  console.log("userCourseProfile: ");
  console.log(userCourseProfile);
  // console.log(userCourseProfile.photos.small)
  if (userCourseProfile) {
    console.log(userCourseProfile.photos.small);
  }

  return (
    <React.Fragment>
      {userCourseProfile ? (
        <Card className={classes.root}>
          <img src={userCourseProfile.photos.large}></img>
          <CardContent>
            <Container maxWidth="sm">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    // src="/static/images/avatar/1.jpg"
                    src={userCourseProfile.photos.small}
                    className={classes.large}
                  />
                </Grid>
              </Grid>
            </Container>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              aboutMe: {userCourseProfile.aboutMe}
              <p />
              contacts: {userCourseProfile.contacts.vk}
              <p />
              fullName: {userCourseProfile.fullName}
              <p />
              userId: {userCourseProfile.userId}
              <p />
              lookingForAJob: {userCourseProfile.lookingForAJob.toString()}
              <p/>
              lookingForAJobDescription: {userCourseProfile.lookingForAJobDescription}
              {/* <ul>
                {userCourseProfile.contacts.map(item => (
                  <li>{item}</li>
                ))}
              </ul> */}
            </Typography>
            {/* <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
          </CardContent>
          {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      ) : (
        <p className="App-intro">Download User</p>
      )}
    </React.Fragment>
  );
}
