import { PostPublisherContainer, ProfileImage, PostPublisherDetails,PostForm, PostUrl, PostDescription, Button } from "./PostPublisherStyled";

export default function PostPublisher(){

    return(
        <PostPublisherContainer>
            <ProfileImage/>
            <PostPublisherDetails>
                <h2>What are you going to share today?</h2>
                <PostForm>
                    <PostUrl 
                        type="url"
                        name="url"
                        placeholder="http://..."
                        >
                    </PostUrl>
                    <PostDescription
                        type="text"
                        name="text"
                        placeholder="Awesome article about #javascript">
                    </PostDescription>
                    <Button>Publish</Button>
                </PostForm>
            </PostPublisherDetails>
        </PostPublisherContainer>
    )
} 