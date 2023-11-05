import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { landingService } from '../services/landingService.js'
import { AspectRatio, Box, Spinner } from '@chakra-ui/react'
import Article from '../cmps/Article.jsx'
import { YouTubeVideo } from '../cmps/YouTubeVideo.jsx'

export const LandingDetailsPage = () => {
  const [landing, setLanding] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    loadLanding()
  }, [id])

  const loadLanding = async () => {
    try {
      const data = await landingService.getById(id)
      setLanding(data)
    } catch (error) {
      console.error('Error loading landing details:', error)
    }
  }


  if (!landing) return <Spinner thickness='4px' m='5'
    speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
  return <Article landing={landing} />



}

