import { Download } from "lucide-react";
import { resume } from "@/lib/content";
import { cn } from "@/lib/cn";

export function ResumeLink({
  className,
  variant = "primary",
  label = "Download Resume",
}: {
  className?: string;
  variant?: "primary" | "ghost";
  label?: string;
}) {
  return (
    <a
      href={resume.href}
      download={resume.filename}
      className={cn("btn", variant === "primary" ? "btn-primary" : "btn-ghost", className)}
    >
      <Download className="size-4" aria-hidden />
      {label}
    </a>
  );
}
