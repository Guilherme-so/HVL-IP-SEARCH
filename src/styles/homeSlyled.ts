import styled from "styled-components";

export const HomeSlyled = styled.nav`
  display: flex;
  margin: 100px auto;
  justify-content: center;
`;

export const SearchBox = styled.nav`
  display: flex;
  margin: 100px auto 0px;
  justify-content: center;

  input {
    border: 3px solid #19241d;
    border-radius: 15px;
    padding: 10px 60px;
    font-size: large;
  }
`;


export const Table = styled.table`
  border: 1px solid gray;
  border-radius: 3px;
  padding: 3px;
  width: 70%;
  height: 100%;

  thead {
    margin-bottom: 100px;
  }

  th{
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    color: #fff;
    background-color: #19241d;
  }

  td {
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
  }

  
`;

export const Tr = styled.table`
  border: 1px solid;
  border-radius: 3px;
  padding: 10px;
`;
