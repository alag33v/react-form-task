import styled from 'styled-components';

export const StyledPaymentMethod = styled.div`
  width: 100%;

  .payment {
    color: #9c9ca5;
    margin-left: 5px;

    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      justify-content: center;
    }
  }

  .card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #f2f9fc;
    background-color: #c8d5e5;
    border-radius: 10px;
    width: 170px;
    height: 85px;
    margin: 0 20px 20px 0;
    padding: 5px;
    cursor: pointer;

    :nth-child(3n) {
      margin-right: 0;
    }

    @media (max-width: 1200px) {
      margin: 0 20px 20px;
    }

    @media (max-width: 600px) {
      width: 60%;
      margin: 0 0 20px;
    }

    @media (max-width: 400px) {
      width: 80%;
    }
  }

  .active {
    color: #fff;
    background-color: #936397;
  }

  h4 {
    font-size: 18px;
    color: #f4f8fb;
    margin: 5px 0;
  }

  p {
    font-size: 13px;
    color: #f4f8fb;
    margin: 5px 0;
  }

  .active h4,
  .active p {
    color: #fff;
  }

  .logo {
    width: 30px;
    height: 30px;
  }
`;
