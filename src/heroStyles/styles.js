import styled from 'styled-components'

export const Hero = styled.main`
  width: 100%;
  background: #080808;
  min-height: 100vh;
`;

export const Container = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 60px 0;
`;

export const Label = styled.label`
  width: 100%;
  color:#fff;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 48px;
  font-weight: bold;
  color:#999;
  padding-bottom: 15px;
  &:focus {
    outline:none;
    color:#fff;
  }
`;