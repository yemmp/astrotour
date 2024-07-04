"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { DialogHeader } from "./ui/dialog";
import { useState } from "react";
import { toast } from "./ui/use-toast";

export default function ReserveBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const inputClass = "bg-slate-700 focus:bg-slate-500 p-2";

  const handleSubmit = () => {
    toast({
      title: "Pacote Reservado!",
      description: `Sua viagem foi reservada com sucesso!\nEntraremos em contato em breve!`,
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Reserve Ja!</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Deseja reservar este pacote?
          </DialogTitle>
          <DialogDescription className="text-white/60 text-sm">
            Para concluir a reserva deste pacote de viagem, confirme seus dados
            de contato.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          className="flex flex-col gap-4 text-white"
        >
          <label htmlFor="nome">Nome:</label>
          <input
            className={inputClass}
            id="nome"
            type="text"
            required
            placeholder="José Tiburcio"
          />
          <label htmlFor="email">Email:</label>
          <input
            className={inputClass}
            type="email"
            required
            placeholder="jtiburcio@email.com"
          />
          <label htmlFor="telefone">Telefone:</label>
          <input
            className={inputClass}
            id="telefone"
            type="tel"
            placeholder="(12)1234-5689"
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-[40%] self-center"
          >
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
