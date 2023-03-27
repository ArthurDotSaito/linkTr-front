import styled from "styled-components";

export const PostListContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
`

export const UserPost = styled.ul`
    display:flex;
    flex-direction:column;
    width: 100%;
    height: 17rem;
    background: #171717;
    border-radius: 16px;
    margin-top:20px;
`

export const ImageName = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:18px;
    padding-top:17px;
    justify-content: space-between;
`

export const LeftInformations = styled.section`
    display:flex;
    flex-direction:row;
    width: auto;
`

export const ImageUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
`

export const InfoUser = styled.div`
    width: auto;
    display:flex;
    flex-direction:column;
    margin-left:18px;
    p:nth-child(1){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: #FFFFFF;
    }
    p:nth-child(2){
        font-family: 'Lato';
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
    }
`

export const UserOptions = styled.section`
    display:flex;
    flex-direction:row;
    width: auto;
`

export const LikeAndContentContainer = styled.section`
    display: flex;
    justify-content: space-around;
`

export const LikeContainer = styled.section`
    width: auto;
    display: flex;
    flex-direction: column;
`

export const ImageUrl = styled.div`
    display:flex;
    flex-direction:row;
    box-sizing: border-box;
    width: 80%;
    height: 10rem;
    margin-top:10px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    img{
        width: 30%; 
        border-top-right-radius: 11px;
        border-bottom-right-radius: 11px;
    }
`

export const Urls = styled.div`
    display:flex;
    flex-direction:column;
    p:nth-child(1){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
    }
    p:nth-child(2){
        padding-top:5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
        padding: 10px;
    }
    p:nth-child(3){
        padding-top:13px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
        padding: 10px;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
export const tagStyle = {
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer'
}