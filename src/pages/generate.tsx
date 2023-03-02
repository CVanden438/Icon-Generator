import Head from "next/head";
import React, { useState } from "react";
import Header from "~/components/Header";

const colours = ["red", "green", "blue", "orange", "pink", "purple", "white"];
const styles = [
  "metallic",
  "pixelated",
  "clay",
  "polygon",
  "flat",
  "3d",
  "artistic",
];
const shapes = ["square", "circle", "triangular"];

const Generate = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [selectedColour, setColour] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [shape, setshape] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const handleOptionsChange = () => {};
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ prompt, selectedColour, style, shape, amount });
  };
  return (
    <>
      <Head>
        <title>Generate</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="m-auto min-h-screen w-3/5 bg-primary-1 text-primary-6">
        <h1 className="mb-10 mt-10 text-center text-3xl font-bold">
          Fill Out The Form To Generate Your Icon!
        </h1>
        <form className="flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="border p-4">
            <legend className="text-xl font-bold">Enter Your Prompt:</legend>
            <label htmlFor="prompt"></label>
            <input
              className="w-full pl-2 pr-2 pt-1 pb-1 text-primary-1"
              type="text"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="a panda eating bamboo"
            />
          </fieldset>
          <fieldset className="grid grid-cols-5 justify-items-center gap-4 border p-4">
            <legend className="text-xl font-bold">Choose A Colour:</legend>
            {colours.map((colour, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={colour}
                    name="colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                    className={`h-20 w-20 appearance-none transition-all checked:scale-150`}
                    style={{ backgroundColor: `${colour}` }}
                  />
                  <label htmlFor={colour} className="hidden text-xl">
                    {colour}
                  </label>
                </div>
              );
            })}
          </fieldset>
          <fieldset className="grid grid-cols-5 gap-4 border p-4">
            <legend className="text-xl font-bold">Choose A Style:</legend>
            {styles.map((style, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={style}
                    name="colour"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="h-8 w-8 appearance-none rounded-full border-2 border-primary-4 bg-primary-6 checked:bg-primary-3"
                  />
                  <label htmlFor={style} className="text-xl">
                    {style}
                  </label>
                </div>
              );
            })}
          </fieldset>
          <fieldset className="grid grid-cols-3 gap-4 border p-4">
            <legend className="text-xl font-bold">Choose A Shape:</legend>
            {shapes.map((shape, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={shape}
                    name="colour"
                    value={shape}
                    onChange={(e) => setshape(e.target.value)}
                    className="h-8 w-8 appearance-none rounded-full border-2 border-primary-4 bg-primary-6 checked:bg-primary-3"
                  />
                  <label htmlFor={shape} className="text-xl">
                    {shape}
                  </label>
                </div>
              );
            })}
          </fieldset>
          <fieldset className="border p-4">
            <legend className="text-xl font-bold">
              Choose Amount to Generate:
            </legend>
            <label htmlFor="amount"></label>
            <input
              type="number"
              min={1}
              max={10}
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              className="w-full pl-2 pr-2 pt-1 pb-1 text-primary-1"
            />
          </fieldset>
          <button className="bg-primary-3 p-2">Generate Icon</button>
        </form>
      </main>
    </>
  );
};

export default Generate;
