import { PostListContainer, UserPost, ImageName, LeftInformations, ImageUser, InfoUser, UserOptions, LikeAndContentContainer, LikeContainer, ImageUrl, Urls, InsertComment, InputComment, UrlComment, AuthorComment, ImageComment, TextComment, AllComments} from "./PostListStyled"
import RecycleBin from "../../components/deleteIcon/DeleteIcon";
import EditIcon from "../../components/editIcon/EditIcon";
import LikeIcon from "../../components/likeIcon/LikeIcon";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import axios from "axios";


import { useState } from "react";
import { useParams } from "react-router-dom";


// import LikeList from "../../components/peopleWhoLike/LikeList";
export default function PostList(props) {
    const [toggle, setToggle] = useState({});
    const [commentUser, setCommentUser] = useState("");
    const [showPost, setShowPost] = useState([]);
    const [countComment, setCountComment] = useState([]);
    const token = localStorage.getItem('token');
    const postid = useParams();



  function toggleFunction(id) {
    setToggle({
      ...toggle,
      [id]: !toggle[id],
    });
  };

 

  function sendComments(postid){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
     const request = axios.post(`http://localhost:5000/comments`, {
        comment:commentUser,
        postId:Number(postid)
     },config);
     request.then((response) => {
        console.log(response.data);
     });
     request.catch((err) => {
        console.log(err);
     })

  }


  function ShowComments(postid){
    const promise = axios.get(`http://localhost:5000/comments/${postid}`);
    promise.then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setShowPost(response.data);
        setCountComment(response.data.length)
    });
    promise.catch((err) => {
        console.log(err);
    })
    console.log(postid);
  }


    return (
        <PostListContainer>
            {props.posts.map((post, index) =>
                <UserPost key={index} className="userPost">
                    <ImageName className="imageName">
                        <LeftInformations className="LeftInformations">
                            <ImageUser src={post.image} />
                            <InfoUser className="infoUser">
                                <p>{post.name}</p>
                                {/*                     <ReactTagify
                            tagStyle={tagStyle}
                            tagClicked={tag => navigate("/hashtag/" + tag)}
                        >
                            <p>{post.description}</p>
                            </ReactTagify> */}
                            </InfoUser>
                        </LeftInformations>
                        <UserOptions>
                            <EditIcon
                                idPost={post.postid}
                                posts={props.posts}
                                setPosts={props.setPosts}></EditIcon>
                            <RecycleBin idPost={post.postid} posts={props.posts} setPosts={props.setPosts}></RecycleBin>
                        </UserOptions>
                    </ImageName>
                    
                   

                    <LikeAndContentContainer>
                        <LikeContainer key={post.postid}>
                            <LikeIcon
                                idPost={post.postid}
                                likes={post.likes}
                                updateLikes={(newLikes) => {
                                    props.setNumLikes({ ...props.numLikes, [post.postid]: newLikes })
                                }}>
                            </LikeIcon>
                            {/* <LikeList
                            idPost = {post.postid}
                            likes = {post.likes}
                            numLikes = {props.numLikes[post.postid]}>
                        </LikeList>  */}
                        <p onClick={() => {toggleFunction(post.postid);ShowComments(post.postid);console.log(showPost)}}>{countComment} comments</p>

                        </LikeContainer>
                        <UrlComment>
                            <ImageUrl>
                                <Urls>
                                    <p>{post.titleUrl}</p> 
                                    <p>{post.descriptionUrl}</p>
                                    <p>{post.url}</p>
                                </Urls>
                                <img src={post.imageUrl} />
                            </ImageUrl>
                            <InsertComment style={{ display: toggle[post.postid] ? 'block' : 'none' }}>
                                {showPost.map((show,index) => 
                                
                                <AuthorComment key={index}>

                                    <ImageComment src={show.userImage} />
                                    <TextComment>
                                        <div>
                                            <p>{show.userName} <span>{show.userName === post.name ? "• post’s author" : ""}</span> </p>  
                                        </div>
                                        <p>{show.commentText}</p>
                                    </TextComment>
                                </AuthorComment>)}
                                <AllComments>
                                    <ImageUser src={post.image} />
                                    <InputComment 
                                    id="placeholder-text" 
                                    type="text" 
                                    placeholder="write a comment..." 
                                    value={commentUser}
                                    onChange={(e) => setCommentUser(e.target.value)}
                                    ></InputComment>
                                    <CiLocationArrow1 size={25} color="white" onClick={() => {sendComments(post.postid);toggleFunction(post.postid)}}/>
                                </AllComments>
                               
                            </InsertComment>
                           
                        </UrlComment>

                    </LikeAndContentContainer>
                       
                 


                </UserPost>

            )}
            

        </PostListContainer>
    )
}