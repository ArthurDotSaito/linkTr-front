import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function signUpUser(e) {
    e.preventDefault();
    setIsLoading(true);

    const request = {
      email: email,
      password: password,
      username: username,
      pictureUrl: pictureUrl,
    };

    const promise = axios.post("http://localhost:5000/signup", request);
    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch(() => {
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setUsername("");
      alert("Something went wrong, fill in the fields again");
    });
  }
  return (
    <MainContainer>
      <LeftContainer>
        <Title>linkr</Title>
        <SubTitle>
          save, share and discover
          <br /> the best links on the web
        </SubTitle>
      </LeftContainer>
      <RightContainer>
        <FormContainer onSubmit={signUpUser}>
          <input
            required
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            required
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            required
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            required
            placeholder="picture url"
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          ></input>
          <SignUpButton disabled={isLoading} type="submit">
            Sign Up
          </SignUpButton>
          <Link to={"/"}>
            <p>Switch back to log in</p>
          </Link>
        </FormContainer>
      </RightContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #333333;
`;
const LeftContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  flex-direction: column;
  background-color: #151515;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
`;
const Title = styled.div`
  font-family: "Passion One";
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding-left: 144px;
`;
const SubTitle = styled.div`
  font-family: "Oswald";
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  padding-left: 144px;
`;
const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  padding-left: 70px;
  input {
    background-color: #ffffff;
    border-radius: 6px;
    width: 429px;
    height: 65px;
    font-family: "Oswald";
    font-size: 27px;
    line-height: 40px;
    color: #9f9f9f;
    padding-left: 10px;
    margin-bottom: 13px;
  }
  p {
    justify-content: center;
    font-family: "Lato";
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
    margin-top: 14px;
    padding-left: 125px;
  }
`;
const SignUpButton = styled.button`
  width: 429px;
  height: 65px;
  background-color: #1877f2;
  border-radius: 6px;
  font-family: "Oswald";
  font-size: 27px;
  line-height: 40px;
  color: #ffffff;
  opacity: ${(props) => (!props.disabled ? "1" : "0.7")};
`;
