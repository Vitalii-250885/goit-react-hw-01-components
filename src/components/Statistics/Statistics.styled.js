import styled from "styled-components";

export const Title = styled.h2`
    margin: 40px 0 40px 0;
    text-align: center;
`;

export const Wrapper = styled.section`
    margin-top: 20px;
    width: 400px;

    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid grey;
    border-radius: 5px;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
`;

export const StatItem = styled.li`
    background-color: tomato;
    width: 80px;
    padding: 10px 0 10px 0;
    text-align: center;
`;