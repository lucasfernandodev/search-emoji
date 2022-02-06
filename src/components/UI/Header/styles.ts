import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 45px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button{
    background: transparent;
    color: #242424;
    border: unset;
    outline: unset;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
  }

  button:hover{
    text-decoration: underline;
  }

  @media (max-width: 550px){
    button{
      font-size: 18px;
    }
  }
`;
