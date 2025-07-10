import React from "react";

type Speedrun = {
  id: string;
  player: string;
  time: number;
  date: string;
  region?: string;
};

const mockRuns: Speedrun[] = [
  { id: "1", player: "Summoner123", time: 82.3, date: "2025-07-09", region: "NA" },
  { id: "2", player: "FiddlestickMain", time: 88.5, date: "2025-07-07", region: "EUW" },
  { id: "3", player: "TockerFan", time: 79.8, date: "2025-07-08", region: "KR" },
];

export default function Home() {
  return (
    <main className="p-8 text-center">
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
                <td className="p-2 border">{run.date}</td>
                <td className="p-2 border">{run.region || "—"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
