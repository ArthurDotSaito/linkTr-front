import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { TimelinePageContainer } from "./TimelinePageStyled";
import Header from "../../components/Header/Header";

const TimeLinePage = () =>{

    return(
        <TimelinePageContainer>
            <Header></Header>
        </TimelinePageContainer>
    )
}

export default TimeLinePage;