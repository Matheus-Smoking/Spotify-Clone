import styled from 'styled-components'



export const TracksItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0px 0 15px;
  position: relative;
  cursor: pointer;
  transition: .5s;
  padding-bottom: 6px;

  &:before {
    content: "";
    background: #999;
    width: 0;
    height: 1px;
    position: absolute;
    bottom: 0;
    transition: .5s;
  }
  &:hover:before {
    content: "";
    width: 100%;
  }
`;

export const Number = styled.strong`
  font-size:15px;
  margin: 0;
  color:#999;
  margin-right:10px;
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

