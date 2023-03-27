import styled from "styled-components";

export const PostListContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 611px;
    justify-content: center;
    align-items: center;
`

export const UserPost = styled.ul`
    display:flex;
    flex-direction:column;
    width: 100%;
    height: auto;
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
    width: 39px;
    height: 39px;
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
    p{
        
        color: #FFFFFF;
    }
`

export const ImageUrl = styled.div`
    display:flex;
    flex-direction:row;
    box-sizing: border-box;
    width: 503px;
    height: 10rem;
    margin-top:10px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    img{
        border-top-right-radius: 11px;
        border-bottom-right-radius: 11px;
        width: 153.44px;
        height: 155px;
    }
`

export const Urls = styled.div`
    display:flex;
    flex-direction:column;
    width:503px;
    justify-content: space-around;
    p:nth-child(1){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
        width: 249.98px;
        padding-top:24px;
        padding-left:20px;
    }
    p:nth-child(2){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
        width: 302.82px;
        padding-top:5px;
        padding-left:20px;
        padding: 10px;
        max-width: 100%;
    }
    p:nth-child(3){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 263.19px;
        padding-top:13px;
        padding-left:20px;


    }
`

export const InsertComment = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:19px;
    margin-bottom:25px;
    background: #1E1E1E;
    width:611px;
    padding-left:25px;
    margin:0 auto;
    margin-left:-60px;


`
export const InputComment = styled.input`
    width: 510px;
    height: 39px;
    background: #252525;
    border-radius: 8px;
    margin-left:14px;
    border:none;
    padding-bottom:40px;
  
    
`
export const UrlComment = styled.div`
    flex-direction:column;
    width:611px;

`

export const AuthorComment = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:15px;
   

`
export const ImageComment = styled.img`
    width: 39px;
    height: 39px;
    border-radius: 304px;


`
export const TextComment = styled.div`
    flex-direction:column;
    margin-left:18px;
    p:nth-child(1){
        font-size: 14px;
        color: #F3F3F3;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }
    p:nth-child(2){
        color: #ACACAC;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
    div span{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #565656;
    }
  
`
export const AllComments = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
    padding-bottom:20px;

`
