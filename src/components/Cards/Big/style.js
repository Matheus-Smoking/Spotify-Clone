import styled from 'styled-components'


export const Card = styled.div`
  width: 250px;
  margin: 35px auto;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  &:hover{
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
`;

export const NameAlbum = styled.p`
  color:#fff;
  font-size:24px;
  font-weight:bold;
  text-align:center;
  margin: 5px 0;
`;
export const Artist = styled.p`
  color:#999;
  font-size:18px;
  font-weight:400;
  text-align:center;
  margin: 5px 0;
`;
