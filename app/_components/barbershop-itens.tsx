import { StarIcon } from "lucide-react"
import { BarberShop } from "../generated/prisma"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import Link from "next/link"

interface BarberShopitemProps {
  barberShops: BarberShop
}

const BarberShopitem = ({ barberShops }: BarberShopitemProps) => {
  return (
    <Card className="min-w-[167px] gap-0 rounded-2xl py-0">
      <CardContent className="p-0">
        {/* Imagem */}
        <div className="relative h-[159px] w-full">
          <Image
            className="rounded-2xl object-cover"
            src={barberShops.imageUrl}
            fill
            alt={barberShops.name}
          />

          <Badge className="absolute top-2 left-2" variant="secondary">
            <StarIcon size={12} className="fill-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        {/* content */}
        <div className="px-2 py-3">
          <h3 className="font-semibold-bold truncate text-sm">
            {barberShops.name}
          </h3>
          <p className="truncate text-sm text-gray-400">
            {barberShops.address}
          </p>
          <Button className="mt-3 w-full" asChild>
            <Link href={`/barbershops/${barberShops.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopitem
