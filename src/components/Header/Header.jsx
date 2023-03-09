import { HeaderPageContainer, ProfileImage, ProfileSettings,Logout, SearchBarContainer} from "./HeaderStyled";
import Vector from '../../assets/Vector.svg';
import DebounceInput from 'react-debounce-input';
import styled from "styled-components";
import axios from "axios";
import React from "react";

export default function Header(){
    const [users, setUsers] = React.useState([]);
    const [showResults, setShowResults] = React.useState(false);

    React.useEffect(() =>{
        setShowResults(users.length > 0)
        console.log(showResults)
    }, [users, showResults]);

    const searchForUser = (query) => {
        axios.get(`http://localhost:5000/search?q=${query}`)
          .then(response => {
            console.log(response.data);
            setUsers(response.data);
            setShowResults(true);
          })
          .catch(error => {
            console.error(error);
          });
      };
      
      const handleChange = (event) => {
        const query = event.target.value;
        if (query.length >= 3) {
          searchForUser(query);
        } else {
          setUsers([]);
          setShowResults(false);
        }
      };


    const bla = users.map(user =>{
        console.log(user.username)
    })

    return(
        <HeaderPageContainer>
            <h1>linkr</h1>
            <SearchBarContainer>
                <SearchBar
                    placeholder="Search for people"
                    minLength={3}
                    debounceTimeout={300}
                    onChange={handleChange}
                    ></SearchBar>
                {showResults && (
                <ResultsContainer>
                    {users.length === 0 ? (
                    <NoResults>No results found.</NoResults>
                    ) : (
                    users.map(user => (
                        <Result key={user.username}>
                        <Avatar src={user.icon} />
                        <Username>{user.username}</Username>
                        </Result>
                    ))
                    )}
                </ResultsContainer>
                )}
            </SearchBarContainer>
            <ProfileSettings>
                <Logout src={Vector}/>
                <ProfileImage/>
            </ProfileSettings>
        </HeaderPageContainer>
    )
} 

const SearchBar = styled(DebounceInput)`
    width: 100%;
    height: 3rem;
    ::placeholder{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 22.8px;
    color: #C6C6C6;
    padding: 1rem;
}
`;

const ResultsContainer = styled.div`
  background-color:#E7E7E7;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  max-height: 250px;
  position: absolute;
  top: 3.7rem;
  width:33%;
`

const NoResults = styled.div`
  color: #999;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Username = styled.h3`
    height: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 22.8px;
    color:#515151;
`;