"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Newsletter() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <h2 className="text-3xl">Assine nossa Newsletter</h2>
          <Label htmlFor="email2" value="Seu e-mail" />
        </div>
        <TextInput
          id="email2"
          placeholder="nome@lojinha.com"
          required
          shadow
          type="email"
        />
      </div>
      <div className="flex items-center gap-2 text-xs">
        <Checkbox id="agree" />
        <Label className="flex" htmlFor="agree">
          <p>
            Eu concordo com os <b>termos e condições</b>
          </p>
        </Label>
      </div>
      <Button color="dark" outline>
        Assinar!
      </Button>
    </form>
  );
}
