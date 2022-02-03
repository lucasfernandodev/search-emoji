import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;

  & section:last-child{
    margin-bottom: 90px;
  }
`;

export const Welcome = styled.section`
  background: #e9c46a;
  height: calc(100vh - 90px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: calc(100vw - 20%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 90px;
  padding-top: 90px;

  h1 {
    font-size: 44px;
    text-align: center;
  }

  .search-emoji {
    width: 100%;
    height: auto;
  }

  .search-emoji .form-group {
    position: relative;
    width: 100%;
    max-height: 54px;
  }

  .search-emoji .form-group input {
    width: 100%;
    height: 54px;
    border: 2px solid #242424;
    background: transparent;
    color: #383838;
    padding-left: 54px;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Lora', serif;
    border-radius: 8px;
  }

  .search-emoji .form-group input:active,
  .search-emoji .form-group input:focus {
    outline: none;
  }

  .search-emoji .form-group input::placeholder {
    color: #383838;
    font-weight: 500;
  }

  .search-emoji .form-group img{
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
`;