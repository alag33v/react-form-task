import styled from 'styled-components';

export const StyledHelpForm = styled.div`
  margin-bottom: 40px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }

  .btn-wrapper {
    text-align: center;
  }

  .btn {
    color: #363c5c;
    border: 1px solid #363c5c;
    height: 40px;
    width: 115px;
    transition: 0.3s;
    outline: none;
    cursor: pointer;

    @media (max-width: 500px) {
      font-size: 14px;
      height: 30px;
      width: 100px;
    }

    :first-child {
      border-radius: 4px 0 0 4px;
    }

    :last-child {
      border-radius: 0 4px 4px 0;
    }

    &:hover {
      border-color: transparent;
    }
  }

  .active {
    color: #fff;
    background-color: #363c5c;
  }
`;
