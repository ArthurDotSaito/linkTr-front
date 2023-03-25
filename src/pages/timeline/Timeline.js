import styled from "styled-components";
import axios from "axios";
import Treandings from "../../components/trendings/trendings"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Header from "../../components/Header/Header";
import PublishPost from "../../components/PublishPost/PublishPost";
import PostList from "../../components/PostList/PostList";
import InfiniteScroll from 'react-infinite-scroller';

export default function Timeline() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [numLikes, setNumLikes] = useState({})
    const descriptionRef = useRef(null);   
    const [loaded, setLoaded] = useState(true);
    const {id} = useParams();
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
   
    const useTimeline = () => {
    const location = useLocation();
    useEffect(() => {
        if (id === undefined) {
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/timelines`);
            promise.then((response) => {
                setPosts(response.data);
                setLoaded(false);
                console.log(response.data);
            });
            promise.catch((erro) => {
                console.log(erro);
            })
        }
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/timelines/${id}`);
        promise.then((response) => {
            setPosts(response.data);
            setLoaded(false)
            console.log(response.data);
        });
        promise.catch((erro) => {
            console.log(erro);
        })
    }, [location]);
    }

    useTimeline()

    const loadPosts = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/timelines?page=${page}&limit=10`);
        const newPosts = res.data;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newPosts.length > 0);
      };

    return (
        <>
            <Header>
            </Header>
            <MainPageContainer>
            <Second>timeline</Second>
                <PublishPost
                    posts={posts}
                    setPosts={setPosts}
                    token={token}>
                </PublishPost>
                {loaded ? <LoadingMessage>Loading...</LoadingMessage> : 
                <InfiniteScrollStyled
                    pageStart={1}
                    loadMore={loadPosts}
                    hasMore={hasMore}
                    loader={<LoadingMessage key={0}>Loading...</LoadingMessage>}>
                    <PostList
                        posts={posts}
                        setPosts={setPosts}
                        token={token}
                        numLikes={numLikes}
                        setNumLikes={setNumLikes}>
                    </PostList>
                </InfiniteScrollStyled>}
            </MainPageContainer>
            <Treandings/>
        </>
    )
}
const InfiniteScrollStyled = styled(InfiniteScroll)`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const tagStyle = {
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer'
}

const MainPageContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoadingMessage = styled.p`
    width: 80%;
    height: 1rem;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 64px;
    color: #FFFFFF;
    margin-top:3rem;
`   

const Second = styled.p`
    width: 80%;
    height: 4rem;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 64px;
    color: #FFFFFF;
    margin-top:3rem;
`