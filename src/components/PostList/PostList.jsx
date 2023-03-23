import { PostListContainer, UserPost, ImageName, LeftInformations, ImageUser, InfoUser, UserOptions,LikeAndContentContainer, LikeContainer, ImageUrl, Urls } from "./PostListStyled"
import RecycleBin from "../../components/deleteIcon/DeleteIcon";
import EditIcon from "../../components/editIcon/EditIcon";
import LikeIcon from "../../components/likeIcon/LikeIcon";
import LikeList from "../../components/peopleWhoLike/LikeList";
export default function PostList(props){

    return(
        <PostListContainer>
            {props.posts.map((post,index) => 
                <UserPost key={index} className="userPost">
                <ImageName className="imageName">
                <LeftInformations className="LeftInformations">
                        <ImageUser src={post.image}/>
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
                <LikeContainer>
                        <LikeIcon
                            idPost = {post.postid}
                            likes = {post.likes}
                            updateLikes = {(newLikes) =>{
                                props.setNumLikes({...props.numLikes,[post.postid]: newLikes})
                            }}>
                        </LikeIcon>
                        <LikeList
                            idPost = {post.postid}
                            likes = {post.likes}
                            numLikes = {props.numLikes[post.postid]}>
                        </LikeList> 
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
        </PostListContainer>
    )
}