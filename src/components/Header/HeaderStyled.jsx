import styled from "styled-components";

export const HeaderPageContainer = styled.header`
<<<<<<< HEAD
  width: auto;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #151515;
  justify-content: space-between;
  position: relative;
  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: white;
    padding-left: 10px;
  }
`;
=======
    width: auto;
    height: 5rem;
    display: flex;
    align-items: center;
    background-color: #151515;
    justify-content: space-between;
    h1{
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 1.9rem;
        line-height: 54px;
        letter-spacing: 0.05em;
        color: white;
        padding-left: 10px;
    }
`
>>>>>>> e3a1c4f (fixing layout and searchBar)

export const ProfileSettings = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Logout = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0px 10px 0px 10px;
`;
export const ProfileImage = styled.figure`
<<<<<<< HEAD
  width: 54px;
  height: 54px;
  border-radius: 26px;
  background-color: red;
  margin-right: 5px;
`;

export const SearchBar = styled.input`
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
export const SearchBarContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
=======
    width: 54px;
    height: 54px;
    border-radius: 26px;
    background-color: red;
    margin-right: 5px;
`

export const SearchBar = styled.input`
    width: 100%;
    height: 3rem;
    ::placeholder{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 22.8px;
        color: #C6C6C6;
        padding: 1rem;
    }
`
export const SearchBarContainer = styled.section`
    display: flex;
    flex-direction: column;
`
>>>>>>> e3a1c4f (fixing layout and searchBar)
