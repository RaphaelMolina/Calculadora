import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0rem 0rem 2rem 2rem #FFFFFF;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;