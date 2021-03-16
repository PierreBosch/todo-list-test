import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 450px;
  margin-bottom: 32px;

  div#loading {
    align-self: center;
    min-height: 450px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  @media(max-width: 475px) {
    padding: 0;
    margin-top: 32px;
  }
`;

export const GridList = styled.ul`
  width: 100%;
  margin-top: -55px;
  display: grid;
  height: 500px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap:24px 16px;
  overflow-y: scroll;
  padding: 12px;
  border-radius: 14px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.scrollbarTrack};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.scrollbar};
    border-radius: 12px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media(max-width: 670px) {
    height: 100%;
    min-height: 500px;
    overflow-y: visible;
    grid-gap:16px;
  }
`;
