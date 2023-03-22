'use client'
import React, { useState } from 'react'

export default function LinkCopy({ children, copyText, className = '' }) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(copyText)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }
  return (
    <p
      onClick={handleCopyClick}
      className={`font-bold hover:text-red-500 hover:underline cursor-pointer ${className}`}
    >
      {isCopied ? 'Copied \u2714' : children}
    </p>
  )
}
