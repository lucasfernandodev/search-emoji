import styled from 'styled-components';


export const Container = styled.div`
  position: fixed;
  bottom: 24px;
  right: 18px;
  width: 300px;
  height: 56px;
  border-radius: 16px;
  background: #242424;
  color: #ddd;
  
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
  animation: show 500ms linear forwards;

  @keyframes show {
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(0%);
    }
  }

`;
