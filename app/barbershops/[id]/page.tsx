import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { notDeepEqual } from "assert"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarberShopPageProps {
  params: Promise<{ id: string }>
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  const { id } = await params

  const barbershop = await db.barberShop.findUnique({
    where: {
      id,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl || "/default-barbershop.jpg"}
          alt={barbershop?.name || "Barber Shop"}
          fill
          className="object-cover"
        />

        <Button size="icon" className="absolute top-4 left-4" asChild>
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button size="icon" className="absolute top-4 right-4">
          <MenuIcon />
        </Button>
      </div>

      {/* Details */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-purple-700" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="text-purple-700" size={18} />
          <p className="text-sm">5,0 (45 avaliações)</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-3 text-xs font-bold text-gray-400 uppercase">
          Sobre nós
        </h2>
        <p className="text-justify text-sm">
          {barbershop?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </div>
    </div>
  )
}

export default BarberShopPage
