import styled from 'styled-components';

const ContainerStyle = styled.section`
          background-color: ${props => props.theme.colors.light};
          width: 100%;
          /* height: 100vh; */
          max-width: ${props => props.maxwidth}px;
          margin: 0 auto;
          padding: 2rem;
          padding-left: 3rem;
`



export  { ContainerStyle };