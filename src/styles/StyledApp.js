import styled from 'styled-components';

export const StyledApp = styled.div`
  label {
    color: #c2c3c5;
    cursor: pointer;

    span {
      font-size: 12px;
      display: block;
      margin-bottom: 4px;

      @media (max-width: 940px) {
        text-align: center;
      }
    }
  }

  input {
    font-size: 16px;
    color: #000;
    background-color: #f2f2f2;
    border: none;
    border-radius: 5px;
    display: block;
    width: 420px;
    max-width: 100%;
    height: 40px;
    margin-bottom: 35px;
    padding: 0 15px;
    outline: none;
    cursor: pointer;

    @media (max-width: 940px) {
      width: 750px;
      margin: 0 auto 30px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  .form-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;

    @media (max-width: 940px) {
      flex-direction: column;
    }
  }

  .name-wrapper,
  .city-wrapper {
    display: flex;

    @media (max-width: 940px) {
      flex-direction: column;
      justify-content: center;
    }

    label {
      &:first-child {
        margin-right: 20px;

        @media (max-width: 940px) {
          margin-right: 0;
        }
      }
    }

    input {
      width: 200px;

      @media (max-width: 940px) {
        width: 750px;
        margin-bottom: 30px;
      }
    }
  }

  .payment-wrapper {
    display: flex;
    justify-content: space-between;
    border: 2px solid #d2d5dc;
    border-radius: 20px;
    padding: 10px 15px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  .card {
    width: 100%;

    p {
      font-size: 14px;
      margin: 5px 0 5px 175px;

      @media (max-width: 1200px) {
        text-align: center;
        margin: 0 0 5px;
      }
    }
  }

  .bank-card {
    background-color: #c8d5e5;
    border-radius: 20px;
    margin-left: 170px;
    padding: 15px 25px;
    width: 375px;
    max-width: 100%;
    height: 190px;

    @media (max-width: 1200px) {
      margin: 0 auto;
    }

    @media (max-width: 500px) {
      width: 320px;
      height: 170px;
    }

    @media (max-width: 400px) {
      padding: 10px 15px;
      height: 160px;
    }

    span {
      font-size: 14px;
      color: #fff;
      display: block;
      margin-bottom: 2px;
    }
  }

  .bank-card__number {
    @media (max-width: 500px) {
      margin-left: 14px;
    }

    @media (max-width: 400px) {
      text-align: center;
      margin-left: 0;
    }
  }

  .full-number {
    display: flex;

    input {
      font-size: 18px;
      text-align: center;
      width: 75px;
      margin-right: 10px;

      @media (max-width: 500px) {
        font-size: 14px;
        width: 50px;
        height: 30px;
        margin-right: 4px;
        padding: 0 5px;
      }

      @media (max-width: 400px) {
        width: 45px;
      }

      &:last-child {
        margin-right: 0;

        @media (max-width: 500px) {
          margin-right: 4px;
        }
      }
    }
  }

  .bank-card__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .bank-card__month,
  .bank-card__password {
    input {
      width: 130px;
      margin: 0;

      @media (max-width: 500px) {
        width: 120px;
        height: 35px;
      }

      @media (max-width: 400px) {
        width: 100px;
      }

      @media (max-width: 360px) {
        width: 80px;
      }
    }
  }

  .btn-submit {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background: rgb(217, 70, 87);
    background: linear-gradient(
      90deg,
      rgba(217, 70, 87, 1) 0%,
      rgba(186, 80, 112, 1) 30%,
      rgba(140, 105, 163, 1) 100%
    );
    box-shadow: 0 0 20px rgb(217, 70, 87);
    border: none;
    border-radius: 10px;
    width: 300px;
    max-width: 100%;
    height: 60px;
    display: block;
    margin: 50px auto 75px;
    transition: 0.3s linear;
    outline: none;
    cursor: pointer;

    @media (max-width: 500px) {
      width: 260px;
      height: 50px;
    }

    &:hover {
      background: linear-gradient(
        90deg,
        rgba(217, 70, 87, 1) 0%,
        rgba(186, 80, 112, 1) 50%,
        rgba(140, 105, 163, 1) 100%
      );
    }

    &:active {
      background: linear-gradient(
        90deg,
        rgba(217, 70, 87, 1) 0%,
        rgba(186, 80, 112, 1) 100%,
        rgba(140, 105, 163, 1) 100%
      );
      box-shadow: 0 0 10px rgb(217, 70, 87);
    }
  }
`;
