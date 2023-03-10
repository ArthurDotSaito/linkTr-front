import axios from "axios";
import React from "react";
import Like from '../../assets/whiteLike.svg';
import redLike from '../../assets/redLike.svg'
import { LikeIconContainer, LikeIconImage } from "./LikeIconStyled";

export default function LikeIcon(props){
    const [isLiked, setIsLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(Number(props.likes));
    const token = localStorage.getItem('token');
    console.log(likes)

    const handleLike = async() => {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        if (isLiked) {
          axios
            .put(`http://localhost:5000/likes/${props.idPost}`, { type: 'remove' }, config)
            .then((response) => {
              setIsLiked(false);
              setLikes(likes - 1);
            })
            .catch((error) => console.log(error));
        } else {
          axios
            .put(`http://localhost:5000/likes/${props.idPost}`, { type: 'add' }, config)
            .then((response) => {
              setIsLiked(true);
              console.log(response.data)
              setLikes(likes + 1);
            })
            .catch((error) => console.log(error));
        }
      };

    return(
        <LikeIconContainer onClick={handleLike}>
            <LikeIconImage src={isLiked ? redLike : Like} ></LikeIconImage>

        </LikeIconContainer>
    )
} 