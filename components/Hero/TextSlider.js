import styled from 'styled-components'
import { Button } from '@/components/Button'
import { Text } from '@/primitives/Text'
import { Box } from '@/primitives/Box'
import { Flex } from '@/primitives/Flex'
import { GridLayout, GridItem } from '@/primitives/Grid'

const Dot = styled.div`
  cursor: pointer;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.space[2]};
`

const DotSlider = () => {
  return (
    <Box>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Box>
  )
}

export const TextSlider = ({ text }) => {
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
            <DotSlider />
          </Flex>
        </Box>
        <Box>
          <Text as='h1' fontSize={6}>
            {text}
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
