import styled from 'styled-components'



export const TracksItem = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:0px auto 15px;
  position: relative;
  cursor: pointer;
  transition: .5s;
  padding-bottom: 6px;
  position: relative;
  padding: 5px 10px;
  &.active{
    background: #1DB954;
    color: #fff;
    border-radius: 22px;
    border:none;
    & strong, & p{
      color:#fff
    }
    &:hover:before{
      content:none;
    }
  }
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
    width: 98%;
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




