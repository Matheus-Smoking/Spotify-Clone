import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  & a{
    text-decoration: none;
  }
`;

export const TitleResult = styled.h1`
  color:#fff;
`;

export const NoSeach = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 30px;
  width: 95%;
  margin: 40px auto;
  @media screen and (min-width: 900px) {
    width: 70%;
  }
`;


