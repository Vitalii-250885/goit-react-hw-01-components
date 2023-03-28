import { BsCircleFill } from "react-icons/bs";
import { Wrapper, Avatar, Name, IsOnline, FriendItem } from "./FriendList.styled"
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {

       return (
        <Wrapper>
            {friends.map(friend => (
                <FriendItem key={friend.id}>
                    <IsOnline active={friend.isOnline === true}><BsCircleFill /></IsOnline>
                    <Avatar src={friend.avatar} alt={friend.name} />
                    <Name>{friend.name}</Name>
                </FriendItem>
                
            ))}  
        </Wrapper>
    );    
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
};