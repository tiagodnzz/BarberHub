import { SearchIcon } from 'lucide-react';
import Header from './_components/header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar, AvatarImage } from './_components/ui/avatar';

const Home = () => {
  return <div>
    {/* Header */}
    <Header />

    {/* Hello User */}
    <div className="p-5">
      <h2 className="text-xl font-bold">Ola, Tiago!</h2>
      <p>Quarta-feira, 21 de Janeiro</p>

      {/* Search */}
      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..." />
        <Button size="icon">
          <SearchIcon />
        </Button>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[150px] w-full mt-6">
        <Image
          className="object-cover rounded-xl"
          src="/banner-01.png"
          fill
          alt="Banner"
        />
      </div>

      {/* Agendamento */}
      <Card className="mt-6">
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
    </div>
  </div>
};

export default Home;