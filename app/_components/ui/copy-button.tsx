"use client"

import { Button } from "./button"

interface CopyButtonProps {
  value: string
}

export default function CopyButton({ value }: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (e) {
      // fallback: do nothing
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleCopy}>
      Copiar
    </Button>
  )
}
