// Designed and developed by:
// - Mukesh Yadav

import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        const fadeTimer = setTimeout(() => {
            setOpacity(0)
        }, 1500)

        const hideTimer = setTimeout(() => {
            setIsVisible(false)
        }, 1000)

        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(hideTimer)
            document.body.style.overflow = 'auto'
        }
    }, [isVisible])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[9999] grid place-items-center h-screen w-screen bg-white dark:bg-gray-950">
            <div 
                className='flex items-center gap-2'
                style={{
                    opacity: opacity,
                    transition: 'opacity 1s ease-out'
                }}
            >
                <img
                    src="./logo/cwtLogo-animatedColor.svg"
                    alt="Loading..."
                    className="w-16 h-16"
                />
                <p className='text-gray-800 dark:text-gray-300 text-xl font-semibold animate-pulse'>CWT</p>
            </div>
        </div>
    )
}

export default Loader
