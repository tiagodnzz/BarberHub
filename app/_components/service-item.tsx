import { BarberShopService } from "../generated/prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemProps {
  service: BarberShopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3 py-0">
        {/* Image */}
        <div className="relative min-h-[110px] min-w-[110px]">
          <Image
            src={service.imageUrl || "/default-service.jpg"}
            alt={service.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-500">{service.description}</p>
          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-bold text-purple-400">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button>Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
