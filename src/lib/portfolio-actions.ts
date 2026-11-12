export const CVS = {
  qa: { url: "/cv/Sahan_Tharuka_QA_CV.pdf", filename: "Sahan_Tharuka_QA_CV.pdf" },
  se: { url: "/cv/Sahan_Tharuka_SE-CV.pdf", filename: "Sahan_Tharuka_SE-CV.pdf" },
};

export async function readPdf(response: Response): Promise<Blob> {
  if (!response.ok) throw new Error(`Download failed (${response.status})`);
  const blob = await response.blob();
  if (!(await blob.slice(0, 5).text()).startsWith("%PDF-")) {
    throw new Error("The response is not a PDF");
  }
  return new Blob([blob], { type: "application/pdf" });
}

export function contactUrl(recipient: string, name: string, email: string, subject: string, message: string) {
  const body = `From: ${name} <${email}>\r\n\r\n${message}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}