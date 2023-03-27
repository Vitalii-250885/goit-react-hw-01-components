import { BsCircleFill } from "react-icons/bs";
import { Wrapper, Avatar, Name, IsOnline, FriendItem } from "./Friend.styled"

export const Friend = ({ friends }) => {
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