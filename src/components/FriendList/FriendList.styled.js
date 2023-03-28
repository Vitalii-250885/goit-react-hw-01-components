import styled from "styled-components";

export const Wrapper = styled.ul``;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;

    margin-top: 20px;
    padding: 10px 0 10px 10px;
    width: 390px;

    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const IsOnline = styled.span`
    color: ${p => {
        return p.active ? p.theme.colors.green : p.theme.colors.red;
    }};
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 10px;
`;

export const Name = styled.p`
    margin-left: 10px;
    font-size: 36px;
`;