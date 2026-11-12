import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { CVS, readPdf, contactUrl } from "./portfolio-actions";

describe("public CV downloads", () => {
  for (const [role, cv] of Object.entries(CVS)) {
    test(`${role} downloads the actual PDF without authentication`, async () => {
      const original = await readFile(`public${cv.url}`);
      assert.equal(original.subarray(0, 5).toString(), "%PDF-");
      assert.equal(cv.url, role === "qa" ? "/cv/Sahan_Tharuka_QA_CV.pdf" : "/cv/Sahan_Tharuka_SE-CV.pdf");
      const result = await readPdf(new Response(original));
      assert.equal(result.type, "application/pdf");
      assert.deepEqual(new Uint8Array(await result.arrayBuffer()), new Uint8Array(original));
    });
  }
  test("never downloads a login or HTML page as a PDF", async () => {
    await assert.rejects(readPdf(new Response("<html>Sign in</html>")), /not a PDF/);
    await assert.rejects(readPdf(new Response("Denied", { status: 403 })), /403/);
  });
});

test("contact preserves special characters and line breaks", () => {
  const url = contactUrl("owner@example.com", "A & B", "me@example.com", "QA & SE?", "Hello & thanks #1\n100% ready");
  const params = new URLSearchParams(url.split("?")[1]);
  assert.equal(params.get("subject"), "QA & SE?");
  assert.equal(params.get("body"), "From: A & B <me@example.com>\r\n\r\nHello & thanks #1\n100% ready");
});