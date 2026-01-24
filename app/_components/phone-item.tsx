import { SmartphoneIcon } from "lucide-react"
import CopyButton from "./ui/copy-button"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <SmartphoneIcon className="text-purple-700" size={18} />
        <p className="text-sm">{phone}</p>
      </div>
      <CopyButton value={phone} />
    </div>
  )
}

export default PhoneItem
