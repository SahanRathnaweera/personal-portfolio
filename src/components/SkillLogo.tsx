import { useState } from "react";
import { Code2 } from "lucide-react";

export function SkillLogo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed
    ? <Code2 aria-label={alt} className="h-full w-full text-primary" />
    : <img src={src} alt={alt} width={48} height={48} decoding="async" onError={() => setFailed(true)} className={className} />;
}