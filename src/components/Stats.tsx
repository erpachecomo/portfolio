import type React from "react";
import { Stat } from "poke-ui-react";

const skills = [
  { label: "TypeScript", value: 85 }, 
  { label: "Python", value: 85 }, 
  { label: "Golang", value: 75 }, 
  { label: "React", value: 95 }, 
  { label: "Node.js", value: 85 }, 
  { label: "Jest/RTL/Cypress", value: 80 }, 
  { label: "AWS", value: 85 }, 
]

const Stats: React.FC = () => (
  <div className="flex-grow justify-between">
    <h2 className="text-2xl font-semibold mt-4 text-primary-dark">Stats</h2>
    <div className="flex flex-col justify-evenly gap-y-5">
      {skills.map((value) => (
        <Stat
          label={value.label}
          value={value.value}
          classNames={{
            labelsContainer: "justify-between text-gray-800",
            barFill: "scale-in-hor-left bg-primary",
            bar: "bg-accent",
          }}
        />
      ))}
    </div>
  </div>
);
export default Stats;