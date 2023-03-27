import styled from "styled-components";

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

export const Name = styled.span`
    margin-left: 10px;
    font-size: 36px;
`;