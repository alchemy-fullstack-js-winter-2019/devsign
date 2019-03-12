import styled from 'styled-components';

export const Header = styled.header `
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 30%; 
`;

export const Form = styled.form `
  background-color: #317043;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  width: 70%;
`;

export const Input = styled.input `
  background-color: white;
  border-radius: 2px;
  border-top: none;
  border-left: none;
  border-right: #bdbbbb solid 3px;
  border-bottom: #a2a1a1 solid 3px;
  margin: 7px;
  padding: 5px;
`;

export const Button = styled.button `
  background-color: white;
  border-radius: 3px;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  border-right: #bdbbbb solid 3px;
  border-bottom: #a2a1a1 solid 3px;
`;

export const P = styled.p `
  text-decoration: none;
  color: white;
`;
