import styled from 'styled-components'
import { SiOverleaf } from 'react-icons/si'
import { Box } from '@/primitives/Box'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => `${theme.space[3]}`};
`

const Logo = styled(SiOverleaf)`
  color: ${({ theme }) => theme.colors.green};
`

const Ul = styled.ul`
  display: flex;
`

const StyledLi = styled.li`
  text-transform: uppercase;
`

const Li = ({ children }) => {
  return (
    <Box ml={[2, 4]}>
      <StyledLi>{children}</StyledLi>
    </Box>
  )
}

const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
  color: ${({ theme }) => theme.colors.green};
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <Logo size='30px' />
      <nav>
        <Ul>
          <Li><A href='#'> About</A></Li>
          <Li><A href='#'>App</A></Li>
          <Li><A href='#'>Plans</A></Li>
          <Li><A href='#'>FAQ</A></Li>
          <Li><A href='#'>Contacts</A></Li>
        </Ul>
      </nav>
    </StyledHeader>
  )
}
