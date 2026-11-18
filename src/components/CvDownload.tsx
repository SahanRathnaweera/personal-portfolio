import { useEffect, useState } from "react";
import { Download, Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readPdf } from "@/lib/portfolio-actions";
import { deliverCv } from "@/lib/cv-delivery";

export function CvDownload({ url, filename, label }: { url: string; filename: string; label: string }) {
  const [file, setFile] = useState<File>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    setFile(undefined);
    void fetch(url, { signal: controller.signal })
      .then(readPdf)
      .then((blob) => {
        if (!controller.signal.aborted) setFile(new File([blob], filename, { type: "application/pdf" }));
      })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [url, filename, attempt]);

  return (
    <div className="flex flex-col items-start gap-2">
      <Button
        type="button"
        disabled={!file && !error}
        className="group h-auto px-5 py-3 rounded-full font-semibold shadow-glow hover:scale-105 transition-transform"
        onClick={() => {
          if (error) { setAttempt((value) => value + 1); return; }
          if (file) void deliverCv(file).catch(() => setError(true));
        }}
      >
        {error ? <RefreshCw /> : file ? <Download /> : <Loader2 className="animate-spin" />}
        {error ? `Retry ${label}` : label}
      </Button>
      {error && <span role="alert" className="text-sm text-destructive">CV couldn't load. Please try again.</span>}
    </div>
  );
}