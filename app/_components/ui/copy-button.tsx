"use client"

import { toast } from "sonner"
import { Button } from "./button"

interface CopyButtonProps {
  value: string
}

export default function CopyButton({ value }: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success("Número copiado para a área de transferência!")
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
