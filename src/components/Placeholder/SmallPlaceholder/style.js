import styled, { keyframes } from 'styled-components'

const animationName = keyframes`
  0% { right: 103px}
  100% { right: -282px}
`

export const Card = styled.div`
  width: 200px;
  margin: 20px 15px;
  transition: all 0.2s linear 0s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Img = styled.div`
  width: 200px;
  height:200px;
  background:#ccc;
  position: relative;
  overflow: hidden;
  &:before{
    content: '';
    background: #bfbfbf;
    position: absolute;
    width: 312px;
    height: 54px;
    transform: rotate(45deg);
    top: 70px;
    right: 103px;
    animation: ${animationName} 0.8s infinite;
  }
`;

export const NameAlbum = styled.p`
  background:#ccc;
  width:180px;
  height:15px;
  margin: 5px auto;
  border-radius:4px;
`;

export const NameArtist = styled.p`
  background:#ccc;
  width:100px;
  height:15px;
  margin: 5px auto;
  border-radius:4px;
`;