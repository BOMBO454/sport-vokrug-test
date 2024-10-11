import { VideostandEvent } from "@/generated/graphql.tsx";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { CountdownRing } from "@/components/common/CountdownRing";
import { formatEventDates } from "@/helpers/formatEventDates.ts";

function Countdown({
  dt_start,
  className,
}: {
  dt_start: string;
  className?: string;
}) {
  const eventStart = DateTime.fromISO(dt_start);
  const [timeLeft, setTimeLeft] = useState(
    eventStart.diffNow(["days", "hours", "minutes", "seconds"]).toObject(),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        eventStart.diffNow(["days", "hours", "minutes", "seconds"]).toObject(),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [eventStart]);

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  return (
    <div
      className={twMerge(
        "flex items-center justify-center mt-4 gap-4",
        className,
      )}
    >
      <CountdownRing
        plural={["день", "дня", "дней"]}
        value={days}
        maxValue={7}
        color={"#0062B5"}
      />
      <CountdownRing
        plural={["час", "часа", "часов"]}
        value={hours}
        maxValue={24}
        color={"#D62F0D"}
      />
      <CountdownRing
        plural={["минута", "минуты", "минут"]}
        value={minutes}
        maxValue={60}
        color={"#FDAE47"}
      />
      <CountdownRing
        plural={["секунда", "секунды", "секунд"]}
        value={seconds}
        maxValue={60}
        color={"#51ACD8"}
      />
    </div>
  );
}

// Компонент мероприятия
export function CurrentEvent({
  event,
  className,
}: {
  event: VideostandEvent;
  className?: string;
}) {
  const formattedDates = formatEventDates(event.dt_start, event.dt_end);
  const eventStart = DateTime.fromISO(event.dt_start);
  const eventEnd = DateTime.fromISO(event.dt_end);

  // Проверка, идет ли мероприятие сейчас
  const [isPlayNow, setIsPlayNow] = useState(false);

  useEffect(() => {
    const now = DateTime.now();
    setIsPlayNow(now >= eventStart && now <= eventEnd);
  }, [eventStart, eventEnd]);

  return (
    <div
      className={twMerge(
        "flex bg-light-dark flex-col items-center w-full py-[50px] gap-3",
        className,
      )}
    >
      <div className="text-center text-light font-bold text-[19px]">
        {formattedDates}
      </div>

      <div className="flex grow justify-center max-w-[65%] h-[120px]">
        <div
          className={twMerge(
            "text-center text-[40px] font-bold truncate md:max-w-full text-balance",
            "line-clamp-2 whitespace-nowrap overflow-hidden overflow-ellipsis", // Для однострочного текста
            "whitespace-normal", // Для двух строк
          )}
        >
          {event.title}
        </div>
      </div>
      <div className="h-[161px]">
        {isPlayNow ? (
          <button className="btn-primary mt-4 bg-[#2C7C33] rounded-[15px] px-[68px] py-[32px] text-[32px] font-bold">
            ИДЕТ СЕЙЧАС
          </button>
        ) : (
          <Countdown dt_start={event.dt_start} className={"justify-self-end"} />
        )}
      </div>
    </div>
  );
}
