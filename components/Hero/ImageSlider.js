import styled from 'styled-components'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Flex } from '@/primitives/Flex'
import { Img } from '@/primitives/Img'

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
    <Flex position='relative' flexDirection={['column', 'row']} alignItems='center'>
      <Img width={['80%', '100%']} src={images[currentStep]} alt='Forest' />
      <Flex
        mt={[4, 0]}
        position={['initial', 'absolute']}
        right='0'
        bottom='0'
      >
        <Button onClick={onPrev}>
          <FiChevronLeft />
        </Button>
        <Button onClick={onNext}>
          <FiChevronRight />
        </Button>
      </Flex>
    </Flex>
  )
}
