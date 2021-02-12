import styled from 'styled-components';

export const StyledAssistanceType = styled.div`
  margin-bottom: 25px;

  p {
    text-align: center;
    margin: 0 0 40px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 30px;

    @media (max-width: 600px) {
      padding: 0;
    }
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    list-style: none;
    height: 80px;
    transition: 0.3s;
    cursor: pointer;

    @media (max-width: 1000px) {
      width: 50%;
      margin-bottom: 20px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 2px solid #d2d5dc;
    border-radius: 15px;
    margin-right: 15px;
    transition: 0.3s;
  }

  .active .image {
    background-color: #946296;
    border-color: #946296;
  }

  .logo {
    width: 35px;
    height: 35px;
    fill: #d2d5dc;
    transition: 0.3s;
  }

  .active .logo {
    fill: #fff;
  }

  .title {
    color: #d2d5dc;
    margin: 0;
    max-width: 120px;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  .active .title {
    color: #878ca0;
  }

  .color {
    fill: blue;
  }
`;
