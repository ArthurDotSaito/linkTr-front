import {
  HeaderPageContainer,
  ProfileImage,
  ProfileSettings,
  Logout,
  SearchBarContainer,
} from "./HeaderStyled";
import Vector from "../../assets/Vector.svg";
import logoutVectorUp from "../../assets/logoutVectorUp.svg";
import DebounceInput from "react-debounce-input";
import styled from "styled-components";
import React, { useContext, useState } from "react";
import UserContext from "../../contexts/Context";
import { useNavigate, Link } from "react-router-dom";
import { HeaderPageContainer, ProfileImage, ProfileSettings,Logout, SearchBarContainer} from "./HeaderStyled";
import Vector from '../../assets/Vector.svg';
import DebounceInput from 'react-debounce-input';
import styled from "styled-components";
import axios from "axios";

export default function Header() {
  const [users, setUsers] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const [turn, setTurn] = React.useState(false);
  const { setToken, setUser, token } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  React.useEffect(() => {
    if (token === undefined) {
      alert("You cannot access timeline without logging in");
      navigate("/");
    }
  });
  React.useEffect(() => {
    setShowResults(users.length > 0);
  }, [users, showResults]);
   
  const searchForUser = (query) => {
    axios
      .get(`http://localhost:5000/search?q=${query}`)
      .then((response) => {
        setUsers(response.data);
        setShowResults(true);
      })
      .catch((error) => {
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

  function handleTurn() {
    if (turn === false) {
      setTurn(true);
    } else {
      setTurn(false);
    }
  }
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(undefined);
    setUser({});
    navigate("/");
  }

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
                        <Link to={`/timelines/${user.id}`}>
                            <Result key={user.id} onClick={() => console.log(user.id)}>
                              <Avatar src={user.icon} />
                              <Username>{user.username}</Username>
                            </Result>
                          </Link>

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

  const bla = users.map((user) => {
    console.log(user.username);
  });

  return (
    <HeaderPageContainer>
      <h1>linkr</h1>
      <SearchBarContainer onClick={() => setTurn(false)}>
        <SearchBar
          placeholder="Search for people"
          minLength={3}
          debounceTimeout={300}
          onChange={handleChange}
          data-test="search"
        ></SearchBar>
        {showResults && (
          <ResultsContainer onClick={() => setTurn(false)}>
            {users.length === 0 ? (
              <NoResults>No results found.</NoResults>
            ) : (
              users.map((user) => (
                <Result key={user.username}>
                  <Avatar data-test="avatar" src={user.icon} />
                  <Username>{user.username}</Username>
                </Result>
              ))
            )}
          </ResultsContainer>
        )}
      </SearchBarContainer>
      <ProfileSettings>
        {turn ? (
          <>
            <Logout turn={turn} onClick={handleTurn} src={logoutVectorUp} />
            <LogoutMenu data-test="menu">
              <h1 data-test="logout" onClick={handleLogout}>
                Logout
              </h1>
            </LogoutMenu>
          </>
        ) : (
          <Logout turn={turn} onClick={handleTurn} src={Vector} />
        )}
        <ProfileImage turn={turn} onClick={handleTurn} />
      </ProfileSettings>
    </HeaderPageContainer>
  );
}


const SearchBar = styled(DebounceInput)`
  width: 100%;
  height: 3rem;
  ::placeholder {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 22.8px;
    color: #c6c6c6;
    padding: 1rem;
  }
`;

const ResultsContainer = styled.div`
  background-color: #e7e7e7;
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
  max-height: 250px;
`

const NoResults = styled.div`
  color: #999
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
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 22.8px;
  color: #515151;
`;

const LogoutMenu = styled.div`
  width: 150px;
  height: 43px;
  background-color: #171717;
  border-radius: 0px 0px 20px 20px;
  position: absolute;
  top: 80px;
  right: 0px;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Lato";
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #ffffff;
    padding-right: 10px;
  }
  display: ${(props) => (!props.turn ? "flex" : "none")};
  :hover {
    cursor: pointer;
  }
`;
    height: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 22.8px;
    color:#515151;
`;
