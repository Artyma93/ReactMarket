import React from "react";

class ButtonFollowed extends React.Component {
  componentDidMount() {}
  render() {
    const {
      followed,
      id,
      UsersCourseAutoFollow,
      UsersCourseAutoUnFollow,
      followId,
      UsersCourseAutoFollowedStart
    } = this.props;
    return (
      <React.Fragment>
        {id ? (
            followed === false ? (
            <button onClick={() => UsersCourseAutoFollowedStart(id, "FOLLOW")}>Follow</button>
          ) : (
            <button onClick={() => UsersCourseAutoFollowedStart(id, "UNFOLLOW")}>
              Unfollow
            </button>
          )
        ) : (
          <h3>Загрузка</h3>
        )}
      </React.Fragment>
    );

    // return (
    //   <React.Fragment>
    //     {id ? (
    //       id !== followId ? (
    //         <button onClick={() => UsersCourseAutoFollow(id)}>Follow</button>
    //       ) : (
    //         <button onClick={() => UsersCourseAutoUnFollow(id)}>
    //           Unfollow
    //         </button>
    //       )
    //     ) : (
    //       <h3>Загрузка</h3>
    //     )}
    //   </React.Fragment>
    // );
  }
}

export default ButtonFollowed;
