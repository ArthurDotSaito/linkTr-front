import axios from "axios";
import { UpdatePostsButtonContainer } from "./UpdatePostsButtonStyled";

export default function UpdatePostsButton(props){

    return(
        <UpdatePostsButtonContainer
            data-test="laod-btn"
            onClick={() =>{
                props.setPosts([...props.updatedPosts,...props.posts])
                props.setPostToUpdate(0)
            }}
            >
            <p>Have new posts, load more!</p>
        </UpdatePostsButtonContainer>
    )
}
