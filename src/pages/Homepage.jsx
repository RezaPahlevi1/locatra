import { useState } from "react";
import Button from "../components/Button";

function Homepage() {
  return (
    <div className="relative text-white  w-full h-screen bg-cover bg-center bg-[url(/bg-nature.jpg)]">
      <div className="absolute inset-0 bg-black/20"></div>
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center gap-10">
        <h1 className="z-10 text-6xl max-w-3xl font-bold">
          Locatra Keeps Track of Your Adventures.
        </h1>
        <h2 className="z-10 text-lg text-white/65 max-w-3xl">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Button>Start Tracking!</Button>
      </section>
    </div>
  );
}

export default Homepage;
