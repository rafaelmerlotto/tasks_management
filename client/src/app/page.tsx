import Image from "next/image";
import React from "react";
import Board from "./components/Board";
import CreateBoard from "./components/CreateBoard";


export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col  items-center justify-center bg-primary">
      <CreateBoard />
      <div className="flex w-full h-screen flex-wrap gap-3 items-center justify-center">
        <Board />
        <Board />
        <Board />
      </div>
    </main>
  );
}
