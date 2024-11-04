import React from "react";
import { useSelector } from "react-redux";
import Protected from "./Protected";

export default function RenderBasedOnUser({ HrComponent, CandidateComponent }) {
  // const userType = useSelector((state) => state.userReducer.userType);
  // if (userType === "HR") {
  //   return <Protected Component={HrComponent} />;
  // }
  // return <CandidateComponent />;
  return <HrComponent />;
}
