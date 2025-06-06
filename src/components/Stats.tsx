import type React from "react";
import { Stat } from "poke-ui-react";

const skills = [
  { label: "TypeScript", value: 7 }, 
  { label: "Python", value: 4 }, 
  { label: "Golang", value: 1 }, 
  { label: "React", value: 7 }, 
  { label: "Node.js", value: 5 }, 
  { label: "Jest/RTL/Cypress", value: 6 }, 
  { label: "AWS", value: 4 }, 
]

const Stats: React.FC = () => (
  <div className="flex-grow justify-between">
    <h2 className="text-2xl font-semibold mt-4 text-primary-dark">Main Tech Stack</h2>
    <div className="flex flex-col justify-evenly gap-y-5">
      <Stat
          label={"Technology"}
          value={"Years of experience"}
          maxValue={7}
          minValue={0}
          classNames={{
            labelsContainer: "justify-between text-gray-800",
            barFill: "bg-accent h-2",
          }}
        />
      {skills.map((value) => (
        <Stat
          label={value.label}
          value={value.value}
          maxValue={7}
          minValue={0}
          classNames={{
            labelsContainer: "justify-between text-gray-800",
            barFill: "scale-in-hor-left bg-primary h-2",
            bar: "bg-gray-300 h-2",
          }}
        />
      ))}
    </div>
  </div>
);
export default Stats;