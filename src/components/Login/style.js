import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  max-width:100%;
  margin: 51% auto 0;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
  position: absolute;
  left: 0;
  right: 0;
  @media screen and (min-width: 1110px) {
    margin: 12% auto 0;
  }
`;

export const Titulo = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
`;

export const Action = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    margin: 5px auto;
    font-weight: 400;
    color: #1DB954;
    text-transform: uppercase;
    border: 1px solid #1DB954;
    width: 49%;
    padding: 11px 8px;
    border-radius: 12px;
    cursor: pointer;
    &:hover{
      background:#1DB954;
      color:#fff;
    }
`;
