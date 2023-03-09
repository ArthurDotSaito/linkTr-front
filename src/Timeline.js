import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import RecycleBin from "./components/deleteIcon/DeleteIcon";
import EditIcon from "./components/editIcon/EditIcon";

export default function Timeline() {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');

    function Postar(event) {
        event.preventDefault();
        console.log("olá");

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }


        const requisicao = axios.post("http://localhost:5000/timelines", {
            url,
            description,
        },config);
        requisicao.then((response) => {
            console.log(response.data);
        });
        requisicao.catch((err) => {
            console.log(err);
        })

    };

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/timelines`);
        promise.then((response) => {
            setPosts(response.data);
            console.log(response.data);
        });
        promise.catch((erro) => {
            console.log(erro);
        })
    },[]);

    return (
        <>
            <Header>
            </Header>
            <MainPageContainer>
                <Second>timeline</Second>
                <PublishPost>
                    <img src="" />
                    <div>
                        <p>What are you going to share today?</p>
                        <InputUrl type="text" placeholder="http:// ..." value={url} onChange={(e) => setUrl(e.target.value)}></InputUrl>
                        <InputDescription type="text" placeholder="Awesome article about #javascript" value={description} onChange={(e) => setDescription(e.target.value)}></InputDescription>
                        <Publish onClick={Postar}>Publish</Publish>
                    </div>
                </PublishPost>
                    {posts.map((post,index) => 
                    <UserPost key={index} className="userPost">
                        <ImageName className="imageName">
                            <LeftInformations>
                                <ImageUser src={post.image}/>
                                <InfoUser className="infoUser">
                                    <p>{post.name}</p>
                                    <p>{post.description}</p>
                                </InfoUser>
                            </LeftInformations>
                            <UserOptions>
                                <EditIcon idPost={post.postid}></EditIcon>
                                <RecycleBin idPost={post.postid}></RecycleBin>
                            </UserOptions>

                        </ImageName>
                        <ImageUrl>
                            <Urls>
                                <p>{post.titleUrl}</p><p>{post.descriptionUrl}</p><p>{post.url}</p> 
                            </Urls>
                            <img src={post.imageUrl} />
                        </ImageUrl>
                        
                    </UserPost>
                    )}
            </MainPageContainer>
        </>

    );
}

const MainPageContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Urls = styled.div`
    display:flex;
    flex-direction:column;
    p:nth-child(1){
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
        padding: 10px;
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
    }
`

const ImageUrl = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width: 153.44px;
        height: 155px;
    }
    box-sizing: border-box;
    width: 503px;
    height: 155px;
    margin-top:10px; 
    margin-left: 4rem;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
`

const UserPost = styled.div`
    display:flex;
    flex-direction:column;
    width: 611px;
    height: 276px;
    background: #171717;
    border-radius: 16px;
    margin-top:20px;
    word-wrap: break-word;
`
const ImageUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
`
const ImageName = styled.div`
    display:flex;
    flex-direction:row;
    padding-left:18px;
    padding-top:17px;
    justify-content: space-between;
`

const LeftInformations = styled.section`
    display:flex;
    flex-direction:row;
    width: auto;
`

const UserOptions = styled.section`
    display:flex;
    flex-direction:row;
    width: auto;
`

const InfoUser = styled.div`
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

const PublishPost = styled.div`
    position: relative;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width: 611px;
    height: 209px;
    margin-top:43px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    p{
        padding-top:21px;
        color:#707070

    }
    div{
        display:flex;
        flex-direction:column;
        margin-left:18px;
    }
    img{
        width: 50px;
        height: 50px;
        margin-bottom:100px;
        border-radius: 26.5px;
        margin-left:16px;

    }
    div p{
            font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: #707070;
    }

 `;
 const InputUrl = styled.input`
    width: 503px;
    height: 30px;
    

    background: #EFEFEF;
    border-radius: 5px;
    margin-top:10px;
    border:none;
    ::placeholder{
        padding-left:12px;
        font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: #949494;

    }
 `;
 const InputDescription = styled.input`
    width: 502px;
    height: 66px;
    left: 501px;
    top: 313px;
    background: #EFEFEF;
    border-radius: 5px;
    margin-top:5px;
    border:none;
    ::placeholder{
        padding-left:12px;
        font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 15px;
line-height: 18px;
/* identical to box height */


color: #949494;
padding-top:8px;

}

 `
 const Publish = styled.button`
    margin-top:5px;
    width: 112px;
height: 31px;
left: 892px;
top: 419px;

background: #1877F2;
border-radius: 5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #FFFFFF;
margin-left:390px `
const Second = styled.p`
    width: 145px;
    height: 64px;
    left: 415px;
    top: 150px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;
    margin-top:78px;

 `
//  const GetPosts = styled.div`
//     display:flex;
//     margin-top:29px;
//     flex-direction:column;
//     margin-left:415px;

//     div{
//         margin-top:16px;
//         display:flex;
//         flex-direction:colum;
//         width: 611px;
//         height: 276px;
//         border-radius: 16px;
//         padding-left:18px;
//         padding-top:18px;
//     }
//     div img{
//         width: 50px;
//         height: 50px;
//         border-radius: 26.5px;


//     }
//     div section{
//         flex-direction:column;
//         margin-left:18px;
//     }
//  `
//  const PostName = styled.p`
//     font-weight: 400;
//     font-size: 19px;
//     line-height: 23px;
//     color: #FFFFFF;
//  `
//  const PostDescription = styled.p`
//     font-style: normal;
//     font-weight: 400;
//     font-size: 17px;
//     line-height: 20px;
//     color: #B7B7B7;
// `
// const ImageUrl = styled.div`
// width: 153.44px;
// height: 155px;
// left: 851.56px;
// top: 596px;
// `

// const ImagePage = styled.img`
//     width: 153.44px;
//     height: 155px;
// `
// const AllUrl = styled.div`
    
// `
