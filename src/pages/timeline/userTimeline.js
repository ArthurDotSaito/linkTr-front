import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Treandings from "../../components/trendings/trendings";
import { ReactTagify } from "react-tagify";
import { useNavigate, useParams } from "react-router-dom";

export default function TimelineUser() {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let notFriend = true;
  let friend = false;

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_URL}/userTimeline/${params.id}`
    );
    promise.then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
    promise.catch((erro) => {
      console.log(erro);
    });
  }, []);
  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_API_URL}/connections/${params.id}`,
      config
    );
    promise.then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        friend = true;
        notFriend = false;
      }
    });
    promise.catch((erro) => {
      console.log(erro);
    });
  }, []);

  function createConnection() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/connections/${params.id}`, config)
      .then((response) => {
        console.log(response.data);
        friend = true;
        notFriend = false;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function removeConnection() {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/connections/${params.id}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        friend = false;
        notFriend = true;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <>
      <Header />

      <Title>Linkr</Title>
      <SubTitle>
        <Second data-test="hashtag-title">{posts[0].name} timeline</Second>
        {notFriend && (
          <button className="follow" onClick={createConnection}>
            Follow
          </button>
        )}
        {friend && (
          <button className="unfollow" onClick={removeConnection}>
            Unfollow
          </button>
        )}
      </SubTitle>
      {posts.map((post, index) => (
        <UserPost key={index}>
          <ImageName>
            <ImageUser src={post.image} />
            <InfoUser>
              <p onClick={() => console.log(post.id)}>{post.name}</p>
              <ReactTagify
                tagStyle={tagStyle}
                tagClicked={(tag) => navigate("/hashtag/" + tag)}
              >
                <p>{post.description}</p>
              </ReactTagify>
            </InfoUser>
          </ImageName>
          <ImageUrl>
            <Urls>
              <p>{post.titleUrl}</p>
              <p>{post.descriptionUrl}</p>
              <p>{post.url}</p>
            </Urls>
            <img src={post.imageUrl} />
          </ImageUrl>
        </UserPost>
      ))}
      <Treandings />
    </>
  );
}
const Urls = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  p:nth-child(1) {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
  }
  p:nth-child(2) {
    padding-top: 5px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
  }
  p:nth-child(3) {
    padding-top: 13px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
  }
`;

const ImageUrl = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 153.44px;
    height: 155px;
  }
  box-sizing: border-box;
  width: 503px;
  height: 155px;
  left: 502px;
  top: 596px;
  margin-left: 87px;
  margin-top: 10px;

  border: 1px solid #4d4d4d;
  border-radius: 11px;
`;

const UserPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 415px;
  width: 611px;
  height: 276px;
  left: 415px;
  top: 495px;

  background: #171717;
  border-radius: 16px;
  margin-top: 20px;
`;
const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
`;
const ImageName = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 18px;
  padding-top: 17px;
`;

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  p:nth-child(1) {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
  }
  p:nth-child(2) {
    font-family: "Lato";
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
  }
`;

const Header = styled.div`
  position: absolute;
  width: 1440px;
  height: 72px;
  left: 0px;
  top: 0px;
  background: #151515;
`;
const Title = styled.div`
  position: absolute;
  width: 108px;
  height: 54px;
  left: 28px;
  top: 10px;
  margin-left: 415px;

  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  /* identical to box height */

  letter-spacing: 0.05em;

  color: #ffffff;
`;

const SubTitle = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;

  .follow {
    width: 112px;
    height: 31px;
    background: #1877f2;
    border-radius: 5px;
  }
  .unfollow {
    width: 112px;
    height: 31px;
    background: #ffffff;
    border-radius: 5px;
  }
`;
const Second = styled.p`
  width: 145px;
  height: 64px;
  left: 415px;
  top: 150px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  margin-top: 78px;
  margin-left: 415px;
`;
const tagStyle = {
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
};
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
