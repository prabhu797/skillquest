// import { useFrappeAuth } from "frappe-react-sdk";
import React, { useEffect } from "react";
// import { useNavigate } from "react-router";
// import Cookies from "js-cookie";

import { useSelector } from "react-redux";

export default function Protected(props) {
  const { Component } = props;
  // const naviagate = useNavigate();

  // const {
  //   currentUser,
  //   isValidating,
  //   isLoading,
  //   login,
  //   logout,
  //   error,
  //   updateCurrentUser,
  //   getUserCookie,
  // } = useFrappeAuth();
  // const userReducer = useSelector((state) => state.userReducer);

  // //Getting the user ndetails using the cookies
  // let c = Cookies.set(getUserCookie);
  // // console.log("Cookies = ", Cookies.get('user_id'));

  // useEffect(() => {
  //   const handleBackButton = (event) => {
  //     if (Cookies.get("user_id") === "Guest") {
  //       naviagate("/login");
  //     }
  //   };

  //   if (Cookies.get("user_id") === "Guest") {
  //     naviagate("/login");
  //   }

  //   window.addEventListener("popstate", handleBackButton);

  //   // Cleanup when component unmounts
  //   return () => {
  //     window.removeEventListener("popstate", handleBackButton);
  //   };
  // }, []);

  return <Component />;
}
