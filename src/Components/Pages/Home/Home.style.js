import styled from "styled-components"
import { Reset } from "../../Styled/Mixins";

export const HomeStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

div {
       padding-bottom: 2rem;
    display: flex;
    gap: 20px;
    text-align: center;

      div {
            diplay: flex;
            flex-direction: column;
            text-align: start;
            gap: 1px;
            justify-content: space-between;
      }

      p {
      margin: 0;
    }

    figure {
      ${Reset}

      img {
        max-width: 10rem;
        border: solid 1px ${(props) => props.theme.colors.senary};
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.tertiary};
      font-size: 0.9rem;
      font-weight: bold;
    }
    .description {
      padding: 0;
    }
}
`