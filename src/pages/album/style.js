import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Tracks = styled.ul`
  margin: 35px 0;
  width: 100%;
  list-style: none;
  padding: 0;
  @media screen and (min-width: 1110px) {
    width: 70%;
  }
`;

export const Back = styled.p`
  
  & a{
    text-decoration: none;
    color: #999;
    text-transform: uppercase;
    font-weight: 800;
    position:relative;
    padding-bottom:5px;
    &:before {
      content: "";
      background: #999;
      width: 0;
      height: 1px;
      position: absolute;
      bottom: 0;
      -webkit-transition: .5s;
      transition: .5s;
    }
    &:hover:before {
      content: "";
      width: 100%;
    }
  }
`;