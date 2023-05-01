import styled from 'styled-components'
import {ClearList} from '../../Styled/Mixins'

export const PosterNavsStyle = styled.nav`
 border-right: solid 1px red;
	ul {
		${ClearList}

		a {
			text-decoration: none;
			color: ${props => props.theme.colors.tertiary}

		}
		.active {
			color: ${props => props.theme.colors.secondary}
		}
	}
`