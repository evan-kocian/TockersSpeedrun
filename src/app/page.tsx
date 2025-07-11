"use client";
import React, { useState } from "react";
import Image from "next/image";
import NewRunForm from "./components/form";

type Speedrun = {
  id: string;
  player: string;
  time: number;
  date: Date;
  region?: string;
  icon: string;
};



export default function Home() {
  const [mockRuns, setMockRuns] = useState<Speedrun[]>([])
  function addNewRun(summonerName: string, runTime: number, region: string) {
    var newSpeedRun = { id: mockRuns.length.toString(), player: summonerName, time: runTime, date: new Date(), region: region, icon: "" }
    setMockRuns([...mockRuns, newSpeedRun])
  }


  return (
    <main className="p-8 text-center">

      {/* <Image
        src="/items/ezgif-2a35960b4f1aa3.png"
        alt="Spear Of Sojin"
        width={80}
        height={30}
        className="mx"
        priority
      /> */}

      <h1 className="text-3xl font-bold mb-6">Tocker's Trials Speedrun Leaderboard</h1>

      <table className="w-full max-w-3xl mx-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Player</th>
            <th className="p-2 border">Time (s)</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Region</th>
          </tr>
        </thead>
        <tbody>
          {mockRuns
            .sort((a, b) => a.time - b.time)
            .map((run, index) => (
              <tr key={run.id} className="border-t">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{run.player}</td>
                <td className="p-2 border">{run.time}</td>
                <td className="p-2 border">{run.date.toString()}</td>
                <td className="p-2 border">{run.region || "—"}</td>
              </tr>
            ))}
        </tbody>
      </table>



      <NewRunForm addNewRuns={addNewRun}/>      
     
    </main>
  );
}
