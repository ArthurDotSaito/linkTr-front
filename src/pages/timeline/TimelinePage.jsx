import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  TimelinePageContainer,
  TimelineMainContent,
} from "./TimelinePageStyled";
import Header from "../../components/Header/Header";
import PostPublisher from "../../components/PostPublisher/PostPublisher";

const TimeLinePage = () => {
  return (
    <TimelinePageContainer>
      <Header></Header>
      <TimelineMainContent>
        <h1>timeline</h1>
        <PostPublisher></PostPublisher>
      </TimelineMainContent>
    </TimelinePageContainer>
  );
};

export default TimeLinePage;
