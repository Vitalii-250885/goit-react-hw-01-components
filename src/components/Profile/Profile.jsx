import { Description } from "components/Profile/Description";
import { Stats } from "components/Profile/Stats"
import { Wrapper } from "./Profile.styled";

export const Profile = ({ user }) => {
    const {username, tag, location, avatar, stats:{followers, views, likes}} = user;
    return (
        <Wrapper className="profile">
            <Description avatar={avatar} username={username} tag={tag} location={location} />
            <Stats followers={followers} views={views} likes={likes} />    
        </Wrapper>
    );
};