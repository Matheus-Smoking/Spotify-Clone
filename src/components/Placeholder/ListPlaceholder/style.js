import styled, { keyframes } from 'styled-components'

const animationName = keyframes`
  0% { left: -9%}
  100% { left: 100%}
`

export const TracksItem = styled.li`
  width: 90%;
  margin:0px auto 20px;
  transition: .5s;
  padding-bottom: 6px;
  padding: 5px 10px;
  background:#999;
  height:15px;
  border-radius: 5px;
  position:relative;
  overflow: hidden;
  &:before{
    content: '';
    background: #8a8a8a;
    position: absolute;
    width: 80px;
    height: 20px;
    transform: rotate(45deg);
    top: 3px;
    left: -9%;
    animation: ${animationName} 0.8s infinite;
  }
`;

export const TracksName = styled.h3`
  font-size:20px;
  margin: 0;
  color:#fff;
  font-weight: 400;
`;

export const Time = styled.p`
  color:#999;
  font-size:18px;
  font-weight:bold;
  text-align:center;
  margin: 0;
`;




