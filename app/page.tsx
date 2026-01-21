import { SearchIcon } from 'lucide-react';
import Header from './_components/header';
import { Button } from './_components/ui/button';
import { Input } from './_components/ui/input';
import Image from 'next/image';

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
    </div>
  </div>
};

export default Home;