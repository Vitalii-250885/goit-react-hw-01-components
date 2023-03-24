import { Description } from "components/Description/Description";
import { Stats } from "components/Stats/Stats"
import { Wrapper } from "./User.styled";

export const User = ({ user }) => {
    const {username, tag, location, avatar, stats:{followers, views, likes}} = user;
    return (
        <Wrapper className="profile">
            <Description avatar={avatar} username={username} tag={tag} location={location} />
            <Stats followers={followers} views={views} likes={likes} />    
        </Wrapper>
    );
};