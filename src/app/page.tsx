import ContactForm from "@/components/contactForm";
import Background from "@/components/layout/background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { benefits } from "@/lib/constants";
import { getData } from "@/lib/hooks";
import Link from "next/link";

type TBenefits = {
  title: string;
  description: string;
};

export default function Home() {
  return (
    <article className="flex flex-col w-full h-full no-scrollbar">
      <div className="relative w-full h-[712px] md:h-screen overflow-hidden">
        <Background
          src="/videos/earth-1.mp4"
          alt="background test"
          type="video"
        />
        <CallToAction />
      </div>
      <div className="bg-gradient-to-t from-black to-slate-950">
        <Benefits />
        {/* <ContactForm /> */}
      </div>
    </article>
  );
}

function CallToAction() {
  return (
    <Card className="flex shadow-none mx-2 md:shadow-sm  flex-col text-center gap-6 md:w-[756px] pt-6 md:p-6 absolute bottom-6 md:left-10">
      <CardTitle className="uppercase">
        Explore o Cosmos com a AstroTour Adventures
      </CardTitle>
      <CardContent className="text-justify">
        Prepare-se para a viagem de uma vida com a AstroTour Adventures! Deixe a
        Terra para trás e embarque em uma jornada inesquecível para explorar o
        cosmos. Nossos pacotes exclusivos de viagens espaciais levam você além
        dos limites do nosso planeta, oferecendo experiências únicas e
        incomparáveis.
      </CardContent>
      <CardFooter className="self-center md:self-end">
        <Button asChild className="uppercase font-bold">
          <Link href="/pacotes">Garanta seu lugar!</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

async function Benefits() {
  // const benefits = await getData("http://localhost:8080/benefits");

  return (
    <Card className="my-10 mx-2  md:mx-16 p-10">
      <CardTitle className="text-center md:text-left">
        Por que escolher a AstroTour Adventures?
      </CardTitle>
      <CardContent className="mt-4">
        <ul>
          {benefits.map((benefit: TBenefits) => (
            <li className="list-disc py-2 text-justify" key={benefit.title}>
              <p className="font-medium">
                {benefit.title}:{" "}
                <span className="font-normal">{benefit.description}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Button asChild className="">
            <Link href={"/informacoes"}>Saiba Mais</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
