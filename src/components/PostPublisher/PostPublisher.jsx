import React from "react";
import { postPublishRequest } from "../../api/postPublishRequest";
import { PostPublisherContainer, ProfileImage, PostPublisherDetails,PostForm, PostUrl, PostDescription, Button } from "./PostPublisherStyled";

export default function PostPublisher(){
    const [postForm, setPostForm] = React.useState({ url: "", description: ""});
    const [disabledButton, setDisabledButton] = React.useState(false);

    function handleInput(e){
        setPostForm({ ...postForm, [e.target.name]: e.target.value});
    }

    function sendPostPublishRequest(event){
        event.preventDefault();
        setDisabledButton(true);
        
        const publishPromise = postPublishRequest(postForm);
        publishPromise.then((response) => {
            setDisabledButton(true);
        })
        publishPromise.catch((response) =>{
            alert("There was an error publishing your link");
            console.log(response.data.message);
            setDisabledButton(true);
        })
        publishPromise.finally(() =>{
            setPostForm({url: "", description: ""});
            setDisabledButton(false);
        })
    }

    return(
        <PostPublisherContainer>
            <ProfileImage/>
            <PostPublisherDetails>
                <h2>What are you going to share today?</h2>
                <PostForm onSubmit={sendPostPublishRequest}>
                    <PostUrl 
                        type="url"
                        name="url"
                        placeholder="http://..."
                        value={postForm.url}
                        onChange={handleInput}
                        required
                        >
                    </PostUrl>
                    <PostDescription
                        type="text"
                        name="text"
                        placeholder="Awesome article about #javascript"
                        value={postForm.description}
                        onChange={handleInput}
                    >
                    </PostDescription>
                    <Button 
                        type="submit"
                        disabled={disabledButton}>{(!disabledButton) ? "Publish" : "Publishing..."}</Button>
                </PostForm>
            </PostPublisherDetails>
        </PostPublisherContainer>
    )
} 