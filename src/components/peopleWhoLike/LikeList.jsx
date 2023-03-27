import { LikeListContainer } from "./LikeListStyled"

export default function LikeList(props){

    const numLikes = props.likes

    return(
        <LikeListContainer > 
            <h1 data-test="counter">{numLikes} likes</h1>
        </LikeListContainer>
    )
}

