// LandingDetailsPage.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { landingService } from '../services/landingService.js'

export const LandingDetailsPage = () => {
  const [landingDetails, setLandingDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchLandingDetails = async () => {
      try {
        const data = await landingService.getById(id)
        setLandingDetails(data)
      } catch (error) {
        console.error('Error loading landing details:', error)
      }
    }

    fetchLandingDetails()
  }, [id])

  if (!landingDetails) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{landingDetails.name}</h1>
      {/* ... display other details */}
    </div>
  )
}

