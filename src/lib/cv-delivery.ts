export function downloadCv(file: File) {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

type DeliveryOptions = {
  coarse: boolean;
  canShare?: (data: ShareData) => boolean;
  share?: (data: ShareData) => Promise<void>;
  download: (file: File) => void;
};

// The file must already be prepared before the click, preserving Safari's activation.
export async function deliverCv(file: File, options: DeliveryOptions = {
  coarse: matchMedia("(pointer: coarse)").matches,
  canShare: navigator.canShare?.bind(navigator),
  share: navigator.share?.bind(navigator),
  download: downloadCv,
}) {
  const data = { files: [file], title: file.name };
  if (options.coarse && options.share && options.canShare?.(data)) {
    try {
      await options.share(data);
      return;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
    }
  }
  options.download(file);
}