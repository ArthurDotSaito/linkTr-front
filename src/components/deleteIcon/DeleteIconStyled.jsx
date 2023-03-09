import styled from "styled-components"

export const DeleteIconContainer = styled.main`
    display: flex;
    margin-right: 3rem;
`

export const DeleteIcon = styled.img`
       
`

export const ModalButtons = styled.section`
    display: flex;
    justify-content:  space-around;
    align-items: center;
`

export const YesModalButton = styled.button`    
    width: 8rem;
    height: 3rem;
    background-color: #1877F2;
    border-radius: 10px;
    h3{
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 40.8px;
        color:#FFFFFF;
    }
`

export const NopeModalButton = styled.button`
    width: 8rem;
    height: 3rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    h3{
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 40.8px;
        color:#1877F2;
    }

`