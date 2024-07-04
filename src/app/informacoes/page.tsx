import Background from "@/components/layout/background";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Disclaimer from "@/components/disclaimer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getData } from "@/lib/hooks";
import { FAQs, partnerships, services } from "@/lib/constants";

type TService = {
  title: string;
  image: string;
  description: string;
  id: string;
};
type TFaq = {
  question: string;
  answer: string;
};
type TPartner = {
  name: string;
  link: string;
  image: string;
};
export default function InfoPage() {
  return (
    <article>
      <div className="relative   w-full h-screen overflow-hidden">
        <Background
          src="/images/satelite.jpg"
          alt="satelite pic"
          type="image"
        />
      </div>
      <div className="absolute left-[5%] top-[8%] md:top-[10%] w-[90%] ">
        <Card className="flex my-[8px] md:mt-0 md:mb-0 ">
          <div className="relative hidden md:block rounded-tl-3xl rounded-bl-3xl  overflow-hidden w-[30%] h-full ">
            <Image
              src="/images/space-bus.jpg"
              alt="space-bus"
              objectFit="cover"
              width={1080}
              height={1920}
            />
          </div>
          <div className="flex flex-col justify-evenly w-full md:w-[70%] pt-4 md:pt-0 h-[756px] overflow-y-auto md:overflow-hidden md:h-auto m-0 ">
            <PresentationCarousel>
              <AboutUs />
              <Services />
              <Security />
              <FAQ />
            </PresentationCarousel>
          </div>
        </Card>
      </div>
    </article>
  );
}

function AboutUs() {
  return (
    <CardContent className="flex flex-col gap-6">
      <CardTitle className="text-center">Sobre Nós</CardTitle>
      <p className="text-justify">
        A AstroTour Adventures é uma empresa líder em turismo espacial, dedicada
        a proporcionar experiências únicas e inesquecíveis para aqueles que
        desejam explorar além dos limites da Terra. Fundada por visionários do
        setor aeroespacial, nossa missão é tornar o sonho da viagem espacial
        acessível e seguro para todos. Com uma equipe de especialistas em
        engenharia espacial, astrofísica e turismo, garantimos que cada aventura
        seja cuidadosamente planejada e executada com os mais altos padrões de
        qualidade e segurança.
        <br /> Nossa missão é abrir as portas do universo para todos, oferecendo
        pacotes de viagens espaciais que combinam aventura, educação e pesquisa.
        Acreditamos que a exploração espacial é o próximo grande passo para a
        humanidade, e estamos empenhados em fazer parte dessa jornada,
        proporcionando oportunidades únicas de descobrir e aprender sobre os
        cosmos.
      </p>
      <CardTitle className="text-center">Fale Conosco</CardTitle>
      <p className="text-justify">
        Estamos sempre prontos para responder às suas perguntas e fornecer mais
        informações sobre nossos serviços. <br />
        Entre em contato conosco através dos seguintes canais:
      </p>
      <p>
        <b>Telefone:</b> +1 (123) 456-7890
      </p>
      <p>
        <b>Email:</b> info@astrotouradventures.com
      </p>
      <p>
        <b>Endereço:</b> 123 Spaceway, Suite 101, Orbit City, Universe
      </p>
      <Disclaimer />
    </CardContent>
  );
}

async function Services() {
  // const services = await getData("http://localhost:8080/services");
  return (
    <CardContent className="flex flex-col items-center justify-center gap-6">
      <CardTitle className="text-center">Nossos Serviços</CardTitle>
      <div className="flex flex-col md:flex-row gap-4">
        {services.map((service) => (
          <Card
            key={service?.title}
            className="md:w-[25%] md:h-[500px] m-0 p-0"
          >
            <CardHeader className="relative w-full h-[70%] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
              <Image
                src={`${service?.image}`}
                alt="service-img"
                fill
                objectFit="cover"
              />
            </CardHeader>
            <CardContent className="mt-2">
              <h2 className="font-bold text-center">{service?.title}</h2>
              <CardDescription className="text-justify margin-auto">
                {service?.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className=" md:hidden">
        <Disclaimer />
      </div>
    </CardContent>
  );
}

async function Security() {
  // const partnerships = await getData("http://localhost:8080/partnerships");
  return (
    <CardContent className="flex flex-col gap-6">
      <CardTitle className="text-center">Segurança e Proteção</CardTitle>
      <p className="text-justify">
        Na AstroTour Adventures, a segurança dos nossos clientes é nossa
        prioridade número um. Todos os nossos voos e expedições são realizados
        com tecnologia de ponta e supervisionados por especialistas altamente
        treinados. Seguimos rigorosos protocolos de segurança em todas as etapas
        das viagens, desde o treinamento pré-viagem até o retorno à Terra. Nossa
        parceria com as principais agências espaciais e fornecedores de
        tecnologia garante que utilizamos as melhores práticas e os equipamentos
        mais avançados disponíveis.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        {partnerships.map((partner: TPartner) => (
          <Card
            key={partner.name}
            className=" md:w-[25%] md:h-[250px]  m-0 p-0"
          >
            <Link target="_blank" href={partner.link}>
              <CardHeader className="relative w-full  md:h-[80%] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
                <Image
                  src={`${partner?.image}`}
                  alt="partner-img"
                  fill
                  objectFit="cover"
                />
              </CardHeader>
              <CardContent className="">
                <h2 className="mt-4 font-bold text-center">{partner?.name}</h2>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <Disclaimer />
    </CardContent>
  );
}

async function FAQ() {
  // const FAQs = await getData("http://localhost:8080/FAQs");

  return (
    <CardContent className="flex flex-col gap-6">
      <CardTitle className="text-center">Perguntas Frequentes</CardTitle>
      <ul className="list-disc">
        {FAQs.map((faq: TFaq) => (
          <li className="p-4" key={faq.question}>
            <h2 className="font-bold">{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </CardContent>
  );
}

function PresentationCarousel({ children }: { children?: React.ReactNode }) {
  const content = React.Children.toArray(children);

  return (
    <CardContent>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {content?.map((children, index) => (
            <CarouselItem key={index}>{children}</CarouselItem>
          ))}
        </CarouselContent>
        <section className="relative">
          <CarouselPrevious
            variant={"ghost"}
            className="absolute left-[20%] md:left-[42%] bottom-0"
          />
          <CarouselNext
            variant="ghost"
            className="absloute right-[20%] md:right-[42%] bottom-0"
          />
        </section>
      </Carousel>
    </CardContent>
  );
}
