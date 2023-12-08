import Head from "next/head";
import React from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Cipher
        </title>
      </Head>

      <Nav />
      <Hero />
    </>
  )
}

export default Home
