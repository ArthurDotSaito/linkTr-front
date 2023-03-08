import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/Context";
import styled from "styled-components";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    const request = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      alert("Fill in all fields");
    }

    const promise = axios.post("http://localhost:5000/signin", request);
    promise.then((res) => {
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data);
      navigate("/timeline");
    });
    promise.catch(() => {
      alert("E-mail or password are invalid!");
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
        <FormContainer onSubmit={login}>
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
          <SignUpButton type="submit">Log In</SignUpButton>
          <Link to={"/signup"}>
            <p>First time? Create an account!</p>
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
  @media (max-width: 1470px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  flex-direction: column;
  background-color: #151515;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1470px) {
    width: 100%;
    height: 30vh;
  }
`;
const Title = styled.div`
  font-family: "Passion One";
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding-left: 144px;
  @media (max-width: 1470px) {
    font-size: 76px;
    line-height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;
const SubTitle = styled.div`
  font-family: "Oswald";
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  padding-left: 144px;
  @media (max-width: 1470px) {
    font-size: 76px;
    line-height: 84px;
    font-size: 23px;
    line-height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;
const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1470px) {
    width: 100%;
    height: 70vh;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    @media (max-width: 1470px) {
      width: 330px;
      height: 55px;
    }
  }
  p {
    display: flex;
    justify-content: center;
    font-family: "Lato";
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #ffffff;
    margin-top: 14px;
  }
  @media (max-width: 1470px) {
    width: 100%;
    padding-bottom: 150px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1470px) {
    width: 330px;
    height: 55px;
    padding-left: 20px;
  }
`;
