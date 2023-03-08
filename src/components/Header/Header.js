import { HeaderPageContainer, ProfileImage, ProfileSettings,Logout } from "./HeaderStyled";
import Vector from '../../assets/Vector.svg';

export default function Header(){
    return(
        <HeaderPageContainer>
            <h1>linkr</h1>
            <ProfileSettings>
                <Logout src={Vector}/>
                <ProfileImage/>
            </ProfileSettings>
        </HeaderPageContainer>
    )
} 