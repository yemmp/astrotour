import Background from "@/components/layout/background";
import TravelCard from "@/components/travelCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getData } from "@/lib/hooks";
import React from "react";
import { tours } from "@/lib/constants";

type TPacote = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration_days: number;
  destination: string;
  features: string[];
  availability: string;
  image: string;
};

export default async function PacotesPage() {
  // const pacotes = await getData("http://localhost:8080/tours");
  const pacotes = tours;
  return (
    <article>
      <div className="relative  w-full h-screen overflow-hidden">
        <Background
          src="/videos/earth2.mp4"
          alt="workstation video"
          type="video"
        />
        <Card className="absolute top-[5%] left-[10%] w-[80%] h-full  overflow-y-auto no-scrollbar ">
          <CardHeader>
            <CardTitle className="text-center">
              Conheça nossos Pacotes de Viagem
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap w-full mb-20 items-center justify-center gap-4">
            {pacotes ? <TourPackages pacotes={pacotes} /> : <EmptyContainer />}
          </CardContent>
        </Card>
      </div>
    </article>
  );
}

function EmptyContainer() {
  return (
    <div className=" self-center">
      <h1 className="text-white/40">Nenhum Pacote Encontrado</h1>
    </div>
  );
}

function TourPackages({ pacotes }: { pacotes: any }) {
  return (
    <>
      {pacotes.map((tour: any) => (
        <TravelCard key={tour.id} tour={tour} />
      ))}
    </>
  );
}
