import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function ContactForm() {
  return (
    <Card className="mx-16 p-10">
      <CardTitle>Entre em contato conosco</CardTitle>
      <CardContent>
        <form className=" flex flex-col">
          <div>
            <input type="text" />
            <input type="email" />
          </div>
          <input type="text" />
        </form>
      </CardContent>
    </Card>
  );
}
