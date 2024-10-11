import { useEffect, useState } from "react";
import { pluralize } from "@/helpers/pluralize.ts";

type CountdownRingProps = {
  value: number;
  maxValue: number;
  plural: string[];
  color?: string;
};

export function CountdownRing({
  value,
  maxValue,
  plural,
  color,
}: CountdownRingProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((value / maxValue) * 100);
    }, 0);

    return () => clearTimeout(timer);
  }, [value, maxValue]);

  return (
    <div className="relative w-[166px] h-[166px]">
      <svg
        className="transform rotate-90 -scale-x-100"
        width="166"
        height="166"
        viewBox="0 0 100 100"
      >
        <circle
          r={radius}
          cx="50"
          cy="50"
          stroke={color || "#3e98c7"}
          strokeWidth="7"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          style={{
            transition: "stroke-dashoffset 0.25s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[20px] font-bold">
        <span className={"text-[50px] leading-none"}>
          {Math.ceil((progress / 100) * maxValue)}
        </span>
        {pluralize(Math.ceil((progress / 100) * maxValue), plural)}
      </div>
    </div>
  );
}
