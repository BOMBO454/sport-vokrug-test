import { Timer } from "@/components/common/Timer";
import { CurrentEvent } from "@/components/common/currentEvent";
import { MainLayout } from "@/components/layout/MainLayout.tsx";
import { useVideostandEvents } from "@/hooks/useVideostandEvents.ts";
import { NextEvent } from "@/components/common/NextEvent";

export function MainScreen() {
  const { loading, mainEvent, nextEvent, error } = useVideostandEvents({
    videostandId: "6",
  });

  if (!mainEvent || loading || error) {
    return (
      <MainLayout>
        <div className="flex h-screen w-screen items-center justify-center">
          <Timer variant={"large"} />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={"flex justify-center items-center grow basis-1"}>
        <Timer />
        {/*<Timer variant={"large"} />*/}
      </div>
      {mainEvent && <CurrentEvent event={mainEvent} className={"shrink-0"} />}
      <div className={"flex grow basis-1"}>
        {nextEvent && <NextEvent event={nextEvent} />}
      </div>
    </MainLayout>
  );
}
