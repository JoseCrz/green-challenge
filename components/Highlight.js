import styled from 'styled-components'
import { Box } from '@/primitives/Box'

const HighlightedText = styled.span`
  display: inline-block;
  
  &:before {
    content: ' ';
    display: block;
    height: 30%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: rgba(235, 149, 59,0.3);
    transform: rotate(2deg);
    bottom: 10px;
    left: 0px;
    border-radius: 20% 25% 20% 24%;
    padding: 0px 3px 0px 5px;
  }
`

export const Highlight = ({ children }) => (
  <Box display='inline' position='relative'>
    <HighlightedText>
      {children}
    </HighlightedText>
  </Box>
)
