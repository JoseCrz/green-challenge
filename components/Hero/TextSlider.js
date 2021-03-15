import styled from 'styled-components'
import { Button } from '@/components/Button'
import { Text } from '@/primitives/Text'
import { Box } from '@/primitives/Box'
import { Flex } from '@/primitives/Flex'

const Dot = styled.div`
  cursor: pointer;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) => isActive ? theme.colors.black : theme.colors.gray};
  margin-top: ${({ theme }) => theme.space[2]};
  transition: cubic-bezier(0.645, 0.045, 0.355, 1) .2s;

  &:hover {
    transform: scale(1.35);
  }
`

const DotSlider = ({ elements, onDotClick, currentStep }) => {
  return (
    <Box>
      {
        elements.map((element, index) =>
          (<Dot key={`dot-${index}`} onClick={() => onDotClick(index)} isActive={currentStep === index} />)
        )
      }
    </Box>
  )
}

export const TextSlider = ({ texts, currentStep, onDotClick }) => {
  return (
    <>
      <Flex>
        <Box>
          <Flex
            height='100%'
            flexDirection='column'
            justifyContent='flex-end'
            alignItems='center'
            mr={4}
          >
            <DotSlider elements={texts} onDotClick={onDotClick} currentStep={currentStep} />
          </Flex>
        </Box>
        <Box>
          <Text as='h1' fontSize={6}>
            {texts[currentStep]}
          </Text>
          <Button>Contact us</Button>
        </Box>
      </Flex>
      <Text fontWeight='light' color='gray' fontSize={2} ml={4} mt={5}>
        Sustainable technologies have been so affordable.
        Produce and exchange energy maximizing the power of renewable sources.
      </Text>
    </>
  )
}
