import Head from "next/head";
import React from "react";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-radial from-blue-900 from-10% to-black to-90%">
      <div className="h-screen w-screen bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-60">
        <Head>
          <title>Cipher&#39;s Homepage</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head >
        <Nav />
        <Hero />
      </div>
    </div >

  )
}

export default Home
