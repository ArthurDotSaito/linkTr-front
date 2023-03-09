import axios from "axios";
import React from "react";
import Modal from 'react-modal';
import styled from "styled-components";
import { DeleteIconContainer,DeleteIcon, YesModalButton, NopeModalButton, ModalButtons } from "./DeleteIconStyled";
import recycleBin from '../../assets/recycleBin.svg'

export default function RecycleBin(){
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = () =>{
        setModalIsOpen(true)
    }

    const closeModal = () =>{
        setModalIsOpen(false)
    }

    const handleNopeModalButtonClick = (event) => {
        event.stopPropagation();
        closeModal();
    }

    console.log(modalIsOpen)

    return(
        <DeleteIconContainer onClick={openModal}>
            <DeleteIcon src={recycleBin}></DeleteIcon>
            <ModalBigContainer id="modal-root">
                <ModalContainer 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={true}
                    ariaHideApp={false}
                    parentSelector={() => document.querySelector('#modal-root')}>
                        <h2>Are you sure you want to delete this post?</h2>
                        <ModalButtons>
                            <YesModalButton>
                                <h3>Yes, delete it</h3>
                            </YesModalButton>
                            <NopeModalButton onClick={handleNopeModalButtonClick}>
                                <h3>No, go back</h3>
                            </NopeModalButton>
                        </ModalButtons>
                </ModalContainer>
            </ModalBigContainer>
        </DeleteIconContainer>
    )
} 

const ModalBigContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled(Modal)`
    width: 30rem;
    height: 15rem;
    border-radius:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color:#333333;
    h2{
        width: auto;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 40.8px;
        color: white;
    };
`