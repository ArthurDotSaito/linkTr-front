import axios from "axios";
import React from "react";
import { DeleteIconContainer,DeleteIcon } from "./DeleteIconStyled";
import recycleBin from '../../assets/recycleBin.svg'

export default function RecycleBin(){

    return(
        <DeleteIconContainer>
            <DeleteIcon src={recycleBin}></DeleteIcon>

        </DeleteIconContainer>
    )
} 