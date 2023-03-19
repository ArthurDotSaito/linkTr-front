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


