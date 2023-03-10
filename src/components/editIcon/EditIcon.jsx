import axios from "axios";
import React from "react";
import { EditIconContainer,EditIconImage } from "./EditIconStyled";
import edit from '../../assets/edit.svg'

export default function EditIcon(){

    return(
        <EditIconContainer>
            <EditIconImage src={edit}></EditIconImage>

        </EditIconContainer>
    )
} 