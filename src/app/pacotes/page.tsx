import Background from "@/components/layout/background";
import TravelCard from "@/components/travelCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tours } from "@/lib/constants";
import React from "react";

export default function PacotesPage() {
  return (
    <article>
      <div className="relative  w-full h-screen overflow-hidden">
        <Background src="/images/galaxy.jpg" alt="galaxy pic" type="image" />
        <Card className="absolute top-[5%] left-[10%] w-[80%] h-[90%]  overflow-y-auto no-scrollbar ">
          <CardHeader>
            <CardTitle className="text-center">
              Conheça nossos Pacotes de Viagem
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-4">
            {tours.map((tour: any) => (
              <TravelCard key={tour.id} tour={tour} />
            ))}
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
