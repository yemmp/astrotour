import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import ReserveBtn from "./reserveBtn";

type TravelCardProps = {
  tour: {
    id: number;
    name: string;
    description: string;
    price: string;
    duration_days: number;
    destination: string;
    features: string[];
    availability: string;
    image: string;
  };
};
export default function TravelCard({ tour }: TravelCardProps) {
  const features = tour.features;
  return (
    <Card className="relative flex overflow-hidden flex-col gap-2 w-[450px] md:h-[500px]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={tour.image}
          alt="destination image"
          layout="fill"
          objectFit="cover"
          className="filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>
      {/* Conteúdo do card */}
      <CardContent className="relative flex flex-col p-4 flex-1 items-center gap-6">
        <CardTitle>{tour.name}</CardTitle>
        <CardDescription>{tour.description}</CardDescription>
        <ul className="list-disc">
          <p className="bold text-center">Planejamento:</p>
          {features &&
            features.map((feature) => (
              <li key={feature}>
                <CardDescription>{feature}</CardDescription>
              </li>
            ))}
        </ul>
        <p>Duração: {tour.duration_days} dias</p>
        <p>Disponibilidade: {tour.availability}</p>
      </CardContent>
      <CardFooter className="relative flex flex-col">
        <div className="flex w-full justify-between">
          <p>
            <b>Destino:</b> {tour.destination}
          </p>
          <p className="bold">R${tour.price}</p>
        </div>
        <ReserveBtn />
      </CardFooter>
    </Card>
  );
}
