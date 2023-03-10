import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "~/components/Header";

const examples = Array.from({ length: 50 }).fill(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4q_mVAo-rdTQhiTkfIW63GN6xyGcwagDYZw&usqp=CAU"
) as string[];

const Community = () => {
  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen pb-10 text-primary-6">
        <h1 className="mb-10 mt-10 text-center text-3xl font-bold">
          Here Are Some Icons Generated By The Community!
        </h1>
        <section className="grid grid-cols-5 justify-items-center gap-4">
          {examples.map((icon, index) => {
            return <img alt="community icon" key={index} src={icon}></img>;
          })}
        </section>
      </main>
    </>
  );
};

export default Community;
