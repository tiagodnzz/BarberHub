import { Key, SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopitem from "./_components/barbershop-itens"

const Home = async () => {
  const barberShops = await db.barberShop.findMany()

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hello User */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Tiago!</h2>
        <p>Quarta-feira, 21 de Janeiro</p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            className="rounded-xl object-cover"
            src="/banner-01.png"
            fill
            alt="Banner"
          />
        </div>

        {/* Agendamento */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between">
            {/* esquerda */}
            <div className="flex flex-col gap-2">
              <Badge className="w-fit">Agendamento</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p>Barber Shop</p>
              </div>
            </div>

            {/* direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Janeiro</p>
              <p className="text-2xl font-bold">31</p>
              <p className="text-sm">17:00</p>
            </div>
          </CardContent>
        </Card>

        {/* Barber Shops Recomendados */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShops) => (
            <BarberShopitem key={barberShops.id} barberShops={barberShops} />
          ))}
        </div>

        {/* Barber Shops Populares */}
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="-mx-5 flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShops) => (
            <BarberShopitem key={barberShops.id} barberShops={barberShops} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
