import styled from "styled-components";

export const Wrapper = styled.ul`
    display: flex;
    width: 100%;
    border-top: 1px solid grey;
    justify-content: space-around;
    background-color: #F0FFF0;
    border-radius: 5px;
`;

export const StatsItem = styled.li`
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    width: 133px;
    text-align: center;
`;

export const StatLabel = styled.span`
    display: block;
    width: 100%;
    font-size: 18px;
    color: grey;
    padding-bottom: 5px;
`;

export const StatQuantity = styled.span`
    display: block;
    width: 100%;
    font-size: 22px;
    font-weight: bold;
`;