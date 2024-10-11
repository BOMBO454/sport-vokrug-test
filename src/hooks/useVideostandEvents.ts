import {
  useVideostandEventsQuery,
  VideostandEvent,
} from "@/generated/graphql.tsx";
import { DateTime } from "luxon";
import { useMemo } from "react";

type VideostandEventsHook = {
  mainEvent: VideostandEvent | null;
  nextEvent: VideostandEvent | null;
  loading: boolean;
  error: Error | null;
};

export function useVideostandEvents({
  videostandId,
}: {
  videostandId: string;
}): VideostandEventsHook {
  const { data, loading, error } = useVideostandEventsQuery({
    variables: { videostand_id: videostandId },
    pollInterval: 10 * 1000,
  });

  const { mainEvent, nextEvent } = useMemo(() => {
    let mainEvent: VideostandEvent | null = null;
    let nextEvent: VideostandEvent | null = null;

    if (!loading && data?.videostandEvents?.current_and_upcoming) {
      const currentTime = DateTime.now();

      const events = data.videostandEvents.current_and_upcoming.map(
        (event) => ({
          ...event,
          dt_start: DateTime.fromISO(event?.dt_start),
          dt_end: DateTime.fromISO(event?.dt_end),
        }),
      );

      if (
        events.some((event) => !event.dt_start.isValid || !event.dt_end.isValid)
      ) {
        console.error("Некорректный формат даты для одного из событий");
        return { mainEvent: null, nextEvent: null };
      }

      const ongoingEvent = events.find(
        (event) => currentTime >= event.dt_start && currentTime <= event.dt_end,
      );

      const upcomingEvents = events.filter(
        (event) => event.dt_start > currentTime,
      );
      upcomingEvents.sort((a, b) =>
        a.dt_start.diff(b.dt_start).as("milliseconds"),
      );

      const mainEvents = events.filter((event) => event.is_main);

      if (ongoingEvent) {
        mainEvent = ongoingEvent as VideostandEvent;
      } else if (mainEvents.length > 0) {
        mainEvent = mainEvents[0] as VideostandEvent;
      } else if (upcomingEvents.length > 0) {
        mainEvent = upcomingEvents[0] as VideostandEvent;
      }

      if (mainEvent && mainEvent !== upcomingEvents[0]) {
        nextEvent = (upcomingEvents[0] as VideostandEvent) || null;
      } else {
        nextEvent = (upcomingEvents[1] as VideostandEvent) || null;
      }
    }

    return { mainEvent, nextEvent };
  }, [data, loading]);

  return {
    mainEvent,
    nextEvent,
    loading,
    error: error ? new Error(error.message) : null,
  };
}
