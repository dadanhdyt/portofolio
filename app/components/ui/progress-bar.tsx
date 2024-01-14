import { useNavigation } from "@remix-run/react";
import { useNProgress } from "@tanem/react-nprogress";
import LoadingBar from "react-top-loading-bar";
export default function ProgressBar() {
  const isAnimating = useNavigation().state == "loading";

  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return <LoadingBar progress={progress * 100} />;
}
