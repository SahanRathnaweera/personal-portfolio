import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

export function SkillLogo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  // Vercel does not serve Lovable's asset proxy. Keep the pointer as the
  // source of truth, but request its hosted URL on either deployment.
  const hostedSrc = src.startsWith("/__l5e/assets-v1/")
    ? `https://sahan-tharuka.lovable.app${src}`
    : src;
  useEffect(() => setFailed(false), [hostedSrc]);
  return failed
    ? <Code2 aria-label={alt} className="h-full w-full text-primary" />
    : <img src={hostedSrc} alt={alt} width={48} height={48} decoding="async" onError={() => setFailed(true)} className={className} />;
}