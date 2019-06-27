import styled from 'styled-components'

export const Card = styled.div`
  width: 200px;
  margin: 20px 15px;
  transition: all 0.2s linear 0s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Img = styled.img`
  width: 200px;
  height:200px;
  background:#ccc;
`;

export const NameAlbum = styled.p`
  color:#fff;
  font-size:20px;
  font-weight:bold;
  text-align:center;
  margin: 5px 0;
  font-weight:400;
`;

export const NameArtist = styled.p`
  color:#999;
  font-size:18px;
  font-weight:bold;
  text-align:center;
  margin: 5px 0;
  font-weight:400;
`;