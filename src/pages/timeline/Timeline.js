import styled from "styled-components";
import axios from "axios";
import Trendings from "../../components/trendings/trendings"
import { ReactTagify } from "react-tagify";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/Header";
import RecycleBin from "../../components/deleteIcon/DeleteIcon";
import EditIcon from "../../components/editIcon/EditIcon";
import LikeIcon from "../../components/likeIcon/LikeIcon";
import LikeList from "../../components/peopleWhoLike/LikeList";
import PublishPost from "../../components/PublishPost/PublishPost";

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [numLikes, setNumLikes] = useState({})
    const [editing, setEditing] = useState(false);
    const descriptionRef = useRef(null);   
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
   
    const useTimeline = () => {
    const location = useLocation();
    useEffect(() => {
        if (id === undefined) {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/timelines`);
            promise.then((response) => {
                setPosts(response.data);
                console.log(response.data);
            });
            promise.catch((erro) => {
                console.log(erro);
            })
        }
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/timelines/${id}`);
        promise.then((response) => {
            setPosts(response.data);
            console.log(response.data);
        });
        promise.catch((erro) => {
            console.log(erro);
        })
    }, [location]);
    }

    return (
        <>
            <Header>
            </Header>
            <MainPageContainer>
            <Second>timeline</Second>
                <PublishPost
                    posts={posts}
                    setPosts={setPosts}
                    token={token}>
                </PublishPost>
                {posts.map((post,index) => 
                    <UserPost key={index} className="userPost">
                    <ImageName className="imageName">
                    <LeftInformations>
                            <ImageUser src={post.image}/>
                            <InfoUser className="infoUser">
                                <p>{post.name}</p>
                                <ReactTagify
                                tagStyle={tagStyle}
                                tagClicked={tag => navigate("/hashtag/" + tag)}
                            >
                                <p>{post.description}</p>
                                </ReactTagify>
                            </InfoUser>
                        </LeftInformations>
                        <UserOptions>
                            <EditIcon 
                                idPost={post.postid} 
                                posts={posts} 
                                setPosts={setPosts}></EditIcon>
                            <RecycleBin idPost={post.postid} posts={posts} setPosts={setPosts}></RecycleBin>
                        </UserOptions>
                    </ImageName>
                    <LikeAndContentContainer>
                    <LikeContainer>
                            <LikeIcon
                                idPost = {post.postid}
                                likes = {post.likes}
                                updateLikes = {(newLikes) =>{
                                    setNumLikes({...numLikes,[post.postid]: newLikes})
                                }}>
                            </LikeIcon>
                            {/* <LikeList
                                idPost = {post.postid}
                                likes = {post.likes}
                                numLikes = {numLikes[post.postid]}>
                            </LikeList> */}
                        </LikeContainer>
                        <ImageUrl>
                            <Urls>
                                <p>{post.titleUrl}</p><p>{post.descriptionUrl}</p><p>{post.url}</p> 
                            </Urls>
                            <img src={post.imageUrl} />
                        </ImageUrl>
                    </LikeAndContentContainer>
                </UserPost>
                    )}
            </MainPageContainer>
        </>
    )
}
const tagStyle = {
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer'
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
    left: 502px;
    top: 596px;
    margin-left:87px;
    margin-top:10px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;
`
const UserPost = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:415px;
width: 611px;
height: 276px;
left: 415px;
top: 495px;

background: #171717;
border-radius: 16px;
margin-top:20px;
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


const LikeAndContentContainer = styled.section`
    display: flex;
    justify-content: center;
`
const LikeContainer = styled.section`
    width: auto;
    display: flex;
    flex-direction: column;
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

const Second = styled.p`
    width: 80%;
    height: 4rem;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 64px;
    color: #FFFFFF;
    margin-top:3rem;
`