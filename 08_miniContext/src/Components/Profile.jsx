import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div>Please Login bhai sahaa.......b</div>;

  return <div>Welcome my biiraaadar {user.username}</div>;
}

export default Profile;
