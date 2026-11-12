import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { CVS, readPdf, contactUrl } from "./portfolio-actions";

describe("public CV downloads", () => {
  for (const [role, cv] of Object.entries(CVS)) {
    test(`${role} downloads the actual PDF without authentication`, async () => {
      const original = await readFile(`public${cv.url}`);
      expect(original.subarray(0, 5).toString()).toBe("%PDF-");
      expect(cv.url).toBe(role === "qa" ? "/cv/Sahan_Tharuka_QA_CV.pdf" : "/cv/Sahan_Tharuka_SE-CV.pdf");
      const result = await readPdf(new Response(original));
      expect(result.type).toBe("application/pdf");
      expect(new Uint8Array(await result.arrayBuffer())).toEqual(new Uint8Array(original));
    });
  }
  test("never downloads a login or HTML page as a PDF", async () => {
    expect(readPdf(new Response("<html>Sign in</html>"))).rejects.toThrow("not a PDF");
    expect(readPdf(new Response("Denied", { status: 403 }))).rejects.toThrow("403");
  });
});

test("contact preserves special characters and line breaks", () => {
  const url = contactUrl("owner@example.com", "A & B", "me@example.com", "QA & SE?", "Hello & thanks #1\n100% ready");
  const params = new URLSearchParams(url.split("?")[1]);
  expect(params.get("subject")).toBe("QA & SE?");
  expect(params.get("body")).toBe("From: A & B <me@example.com>\r\n\r\nHello & thanks #1\n100% ready");
});