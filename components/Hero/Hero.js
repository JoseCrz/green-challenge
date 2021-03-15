import React, { useState } from 'react'
import { Box } from '@/primitives/Box'
import { GridLayout, GridItem } from '@/primitives/Grid'
import { ImageSlider } from './ImageSlider'
import { TextSlider } from './TextSlider'
import { Highlight } from '@/components/Highlight'

const heroInfo = [
  {
    text: <>Start <Highlight>energy</Highlight> revolution from your community</>,
    image: 'images/forest.svg'
  },
  {
    text: <>We must prepare <Highlight>quickly</Highlight> for a third change</>,
    image: 'images/hills.svg'
  },
  {
    text: <>The potential of renewable energy is <Highlight>inmense</Highlight></>,
    image: 'images/river.svg'
  },
  {
    text: <>Alternative energy is <Highlight>inevitable</Highlight> as fossil fuels are finite</>,
    image: 'images/trees.svg'
  },
  {
    text: <>The road to a cleaner future is a <Highlight>one-way street</Highlight></>,
    image: 'images/waterfall.svg'
  }
]

const images = heroInfo.map(info => info.image)
const texts = heroInfo.map(info => info.text)
const heroInfoLast = heroInfo.length - 1

export const Hero = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep === heroInfoLast) {
      setCurrentStep(0)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }
  const prevStep = () => {
    if (currentStep - 1 < 0) {
      setCurrentStep(heroInfoLast)
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleDotClick = (dotIndex) => setCurrentStep(dotIndex)

  return (
    <Box height='calc(100vh - 94px)' mr={3} ml={3}>
      <GridLayout
        height='100%'
        gridTemplateColumns={['1fr', '1fr 1fr']}
        gridTemplateAreas={[`
        "imageSlider"
        "textSlider"
        `, `
          "textSlider imageSlider"
        `]}
      >
        <GridItem gridArea='textSlider' align>
          <TextSlider currentStep={currentStep} texts={texts} onDotClick={handleDotClick} />
        </GridItem>
        <GridItem gridArea='imageSlider' alignSelf='center'>
          <ImageSlider currentStep={currentStep} onPrev={prevStep} onNext={nextStep} images={images} />
        </GridItem>
      </GridLayout>
    </Box>
  )
}
