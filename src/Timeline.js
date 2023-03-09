import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header"


export default function Timeline() {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);

    let token = localStorage.getItem("token");    

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
            <Header></Header>
            <Second>timeline</Second>
            <PublishPost>
                <p>What are you going to share today?</p>
                <InputUrl type="text" placeholder="http:// ..." value={url} onChange={(e) => setUrl(e.target.value)}></InputUrl>
                <InputDescription type="text" placeholder="Awesome article about #javascript" value={description} onChange={(e) => setDescription(e.target.value)}></InputDescription>
                <Publish onClick={Postar}>Publish</Publish>
            </PublishPost>
            <GetPosts>
                {posts.map((post,index) => 
                <><div key={index}>
                        <img src={post.image} />
                        <section>
                            <PostName>{post.name}</PostName>
                            <PostDescription>{post.description}</PostDescription>
                        </section>


                    </div><p>{post.titleUrl}</p><p>{post.descriptionUrl}</p><ImagePage src={post.imageUrl} /></>
                

                
                )}
            </GetPosts>

        </>

    );
}

const Title = styled.div`
    position: absolute;
    width: 108px;
    height: 54px;
    left: 28px;
    top: 10px;
    margin-left:415px;

    
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    /* identical to box height */
    
    letter-spacing: 0.05em;
    
    color: #FFFFFF;
 `
const PublishPost = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
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

 `;
 const InputUrl = styled.input`
    width: 503px;
    height: 30px;
    

    background: #EFEFEF;
    border-radius: 5px;
    margin-top:10px;
 `;
 const InputDescription = styled.input`
 width: 502px;
 height: 66px;
 left: 501px;
 top: 313px;
 background: #EFEFEF;
 border-radius: 5px;
 margin-top:5px;

 `
 const Publish = styled.button`
    margin-top:5px;
    width: 112px;
height: 31px;
left: 892px;
top: 419px;

background: #1877F2;
border-radius: 5px;

 `
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
    margin-left:415px;

 `
 const GetPosts = styled.div`
    display:flex;
    margin-top:29px;
    flex-direction:column;


    div{
        margin-top:16px;
        display:flex;
        flex-direction:row;
        width: 611px;
        height: 276px;
        background: #171717;
        border-radius: 16px;
        padding-left:18px;
        padding-top:18px;
    }
    div img{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;


    }
    div section{
        flex-direction:column;
        margin-left:18px;
    }
 `
 const PostName = styled.p`
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
 `
 const PostDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
`
const ImageUrl = styled.div`
width: 153.44px;
height: 155px;
left: 851.56px;
top: 596px;
`

const ImagePage = styled.img`
    width: 153.44px;
    height: 155px;
`
const AllUrl = styled.div`
    
`

