import { LikeListContainer } from "./LikeListStyled"

export default function LikeList(props){

    const numLikes = Object.values(props.likes).reduce((acc, val) => acc + val, 0);

    return(
        <LikeListContainer > 
            <h1 data-test="counter">{numLikes} likes</h1>
        </LikeListContainer>
    )
}

