"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const TripPlannerPage: React.FC = () => {
    const searchParams = useSearchParams()
    const dest = searchParams?.get('dest') || ''

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Trip Planner</h1>
            {dest && <p>Planning trip to: <strong>{dest}</strong></p>}
            <p>This is a placeholder page. Expand with actual trip planning UI.</p>
        </div>
    )
}

export default TripPlannerPage
