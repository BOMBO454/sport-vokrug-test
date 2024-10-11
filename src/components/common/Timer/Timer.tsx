import { DateTime } from "luxon";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type TimerProps = {
  variant?: "small" | "large";
};

export function Timer({ variant = "small" }: TimerProps) {
  const timerRef = useRef<HTMLDivElement>(null);
  const currentDate = useRef<HTMLDivElement>(null);

  const updateTimeAndDate = () => {
    const currentTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE); // текущее время без секунд
    if (timerRef.current) {
      timerRef.current.innerHTML = currentTime;
    }

    const dateTime = DateTime.now();
    const formattedDate = `${dateTime.setLocale("ru").toFormat("d MMMM")}${variant === "small" ? " · " : "<br/>"}${dateTime.setLocale("ru").toFormat("cccc")}`;
    if (currentDate.current) {
      currentDate.current.innerHTML = formattedDate;
    }
  };

  useEffect(() => {
    updateTimeAndDate(); // Мгновенное обновление времени и даты при загрузке страницы

    const timer = setInterval(() => {
      updateTimeAndDate(); // Обновляем каждую секунду
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={twMerge(
        "flex flex-col items-center",
        variant === "large" &&
          "rounded-[10px] overflow-hidden bg-[#172A52] w-[383px] h-[297px]",
      )}
    >
      <div
        className={twMerge(
          "text-[96px] w-full text-center",
          variant === "large" && "bg-light-dark",
        )}
        ref={timerRef}
      />
      <div
        className={twMerge(
          "text-[22px] flex items-center text-center h-full flex-wrap",
          variant === "large" ? "bg-[#172A52] text-[37px]" : "-m-6",
        )}
        ref={currentDate}
      />
    </div>
  );
}
