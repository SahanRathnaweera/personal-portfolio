import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProjectDemo({ open, onOpenChange, title, src }: {
  open: boolean; onOpenChange: (open: boolean) => void; title: string; src: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className="box-black z-[60] w-[calc(100%-2rem)] max-w-4xl gap-0 overflow-hidden rounded-lg p-0">
        <DialogTitle className="border-b border-primary/20 px-5 py-4 pr-14 text-sm leading-normal text-primary">{title} — Live Demo</DialogTitle>
        {open && <video src={src} controls autoPlay loop muted playsInline preload="metadata" className="aspect-video max-h-[75svh] w-full bg-card object-contain" />}
      </DialogContent>
    </Dialog>
  );
}