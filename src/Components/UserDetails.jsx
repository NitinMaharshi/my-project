import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

function UserDetails() {
  const { userid } = useParams();
  const [user, setUser] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { token } = useContext(AuthContext);

  const getUserDetails = () => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users/${userid}`)
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return isloading ? (
    <div>...loading</div>
  ) : (
    <div className="details">
      <div>
        <h1>{`${user.first_name} ${user.last_name}`}</h1>
      </div>
      <div>
        <h3>{user.email}</h3>
      </div>
      <div>
        <img alt="img" src={user.avatar} />
      </div>
    </div>
  );
}

export { UserDetails };
