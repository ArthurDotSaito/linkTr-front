import { useState } from "react";
import axios from "axios";
import { PublishPostContainer, Post,InputUrl, InputDescription, Publish } from "./PublishPostStyled"

export default function PublishPost(props){
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    function Postar(event) {
        event.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${props.token}` }
        }

        const requisicao = axios.post(`http://localhost:5000/timelines`, {
            url,
            description,
        }, config);

        requisicao.then((response) => {
            console.log(response.data);
            props.setPosts([...props.posts, response.data]);
            setUrl("");
            setDescription("");
        });

        requisicao.catch((err) => {
            console.log(err);
        })
    };

    return(
        <PublishPostContainer>
            <Post>
            <img src="" />
            <div>
                <p>What are you going to share today?</p>
                <InputUrl type="text" placeholder="http:// ..." value={url} onChange={(e) => setUrl(e.target.value)}></InputUrl>
                <InputDescription type="text" placeholder="Awesome article about #javascript" value={description} onChange={(e) => setDescription(e.target.value)}></InputDescription>
                <Publish onClick={Postar}>Publish</Publish>
            </div>
            </Post>
        </PublishPostContainer>
    )
}



