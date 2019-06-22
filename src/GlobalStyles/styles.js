import styled from 'styled-components';

export const Hero = styled.main`
  width: 100%;
  background: #191919;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.section`
  width: 85%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 60px 0;
  @media screen and (min-width: 992px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  width: 100%;
  color:#fff;
  display:block;
  margin-bottom:10px;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  font-family: 'Roboto', sans-serif;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 40px;
  font-weight: bold;
  color:#999;
  padding-bottom: 15px;
  @media screen and (min-width: 992px) {
    font-size: 48px;
  }
  &:focus {
    outline:none;
    color:#fff;
  }
`;