import React from "react";

class ButtonFollowed extends React.Component {
  componentDidMount() {}
  render() {
    const {
      followed,
      id,
      UsersCourseAutoFollowedStart,
      isfollowingInProgress
    } = this.props;
    // debugger
   
    return (
      <React.Fragment>
        {id ? (
          followed === false ? (
            <button
              disabled={isfollowingInProgress.some(item => item === id)}
              onClick={() => UsersCourseAutoFollowedStart(id, "FOLLOW")}
            >
              Follow
            </button>
          ) : (
            <button
              disabled={isfollowingInProgress.some(item => item === id)}
              onClick={() => UsersCourseAutoFollowedStart(id, "UNFOLLOW")}
            >
              Unfollow
            </button>
          )
        ) : (
          <h3>Загрузка</h3>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonFollowed;
