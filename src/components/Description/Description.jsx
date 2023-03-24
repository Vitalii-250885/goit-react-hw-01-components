import { Wrapper, Avatar, Name, Tag, Location } from './Description.styled'

export const Description = ({ avatar, username, tag, location }) => {
    return (
        <Wrapper className="description">
            <Avatar
            src={avatar}
            alt="User avatar"
            className="avatar"
            />
            <Name className="name">{username}</Name>
            <Tag className="tag">@{tag}</Tag>
            <Location className="location">{location}</Location>
        </Wrapper>
    );
};