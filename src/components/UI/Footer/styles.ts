import styled from 'styled-components';

export const Container = styled.footer`
  background: #E9C46A;
  display: flex;
  height: 180px;
  width: 100vw;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  a{
    text-decoration: none;
    color: #383838;
    font-size: 18px;

    &:hover{
      color: #141414;
    }
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
