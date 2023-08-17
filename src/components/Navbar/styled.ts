import styled from "styled-components";

export const SyledNavbar = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #19241d;

  span {
    position: absolute;
    top: 20px;
  }
`;

export const ExcelButton = styled.nav`
  margin-left: auto;

  input {
    display: none;
  }

  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 5px;

    p {
      color: white;
      font-size: larger;
    }
  }
`;
