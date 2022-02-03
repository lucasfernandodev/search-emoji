import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 10%;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 45px;

  .header{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    h2{
      font-size: 32px;
    }

    button{
      background: none;
      border: none;
      outline: none;
      color: #aaa;
      font-weight: bold;
      cursor: pointer;
      transition: 350ms linear;

      &:hover{
        color: #383838;
      }
    }
  }

  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;

    .emoji{
      font-size: 64px;
      width: 145px;
      height: 145px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      transition: 350ms linear;
      cursor: pointer;

      &:hover{
        position: relative;
        transform: translateY(-10px);
      }
    }
  }
`;
