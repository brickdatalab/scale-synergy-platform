import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollIndicator({ targetId }: { targetId?: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setHidden(y > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll down"
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm shadow-elevation-2",
        "transition-all duration-300 hover:text-foreground hover:bg-background/95 hover:shadow-elevation-3",
        "motion-safe:animate-pulse-down motion-reduce:animate-none",
        hidden ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"
      )}
    >
      <ChevronDown className="h-4 w-4" />
      <span className="hidden sm:inline">Scroll to explore</span>
    </button>
  );
}
