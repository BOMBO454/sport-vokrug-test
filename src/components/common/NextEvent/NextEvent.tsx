import { VideostandEvent } from "@/generated/graphql.tsx";
import { twMerge } from "tailwind-merge";
import { formatEventDates } from "@/helpers/formatEventDates.ts";

export function NextEvent({
  event,
  className,
}: {
  event: VideostandEvent;
  className?: string;
}) {
  const formattedDates = formatEventDates(event.dt_start, event.dt_end);
  return (
    <div
      className={twMerge(
        "flex flex-col items-center w-full justify-center grow",
        className,
      )}
    >
      <div className="text-center text-light font-bold text-[18px]">
        {formattedDates}
      </div>

      <div className="flex justify-center max-w-[65%]">
        <div
          className={twMerge(
            "text-center text-[25px] font-bold truncate text-balance",
            "line-clamp-1 whitespace-nowrap overflow-hidden overflow-ellipsis",
          )}
        >
          {event.title}
        </div>
      </div>
    </div>
  );
}
