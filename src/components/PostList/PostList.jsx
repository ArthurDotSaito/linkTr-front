import { PostListContainer, UserPost, ImageName, LeftInformations, ImageUser, InfoUser, UserOptions,LikeAndContentContainer, LikeContainer, ImageUrl, Urls } from "./PostListStyled"
import RecycleBin from "../../components/deleteIcon/DeleteIcon";
import EditIcon from "../../components/editIcon/EditIcon";
import LikeIcon from "../../components/likeIcon/LikeIcon";
import LikeList from "../../components/peopleWhoLike/LikeList";
import UpdatePostsButton from "../UpdatePostsButton/UpdatePostsButton";
export default function PostList(props){

    console.log(props.posts)
    console.log(props.postToUpdate)

    return(
        <PostListContainer>
            {props.postToUpdate !== 0 && 
                <UpdatePostsButton 
                    posts={props.posts}
                    setPosts={props.setPosts}
                    postsToUpdate={props.postsToUpdate}
                    setPostToUpdate={props.setPostToUpdate}
                    updatedPosts={props.updatedPosts}
                    />}
            {props.posts.map((post,index) => 
                <UserPost data-test="post" key={index} className="userPost">
                <ImageName className="imageName">
                <LeftInformations className="LeftInformations">
                        <ImageUser src={post.image}/>
                        <InfoUser className="infoUser">
                            <p data-test="username">{post.name}</p>
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
                            <p className="postTile">{post.titleUrl}</p>
                            <p className="postDescription" data-test="description">{post.descriptionUrl}</p>
                            <p className="postURL" data-test="link">{post.url}</p> 
                        </Urls>
                        <img src={post.imageUrl} />
                    </ImageUrl>
                </LikeAndContentContainer>
            </UserPost>
            )}
        </PostListContainer>
    )
}