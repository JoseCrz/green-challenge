import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Box } from '@/primitives/Box'

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  margin: 0 ${({ theme }) => theme.space[1]};
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[4]};
`
export const ImageSlider = ({ images, currentStep, onPrev = () => {}, onNext = () => {} }) => {
  return (
    <Box position='relative'>
      <img src={images[currentStep]} alt='Forest' />
      <Box
        display='flex'
        position='absolute'
        right='0'
        bottom='0'
      >
        <Button onClick={onPrev}>
          <FiChevronLeft />
        </Button>
        <Button onClick={onNext}>
          <FiChevronRight />
        </Button>
      </Box>
    </Box>
  )
}
