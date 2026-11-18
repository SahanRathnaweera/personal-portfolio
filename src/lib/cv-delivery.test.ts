import { test } from "node:test";
import assert from "node:assert/strict";
import { deliverCv } from "./cv-delivery";
import { CVS } from "./portfolio-actions";

for (const cv of Object.values(CVS)) {
  test(`${cv.filename} reaches mobile sharing synchronously with PDF type`, async () => {
    const file = new File(["%PDF-"], cv.filename, { type: "application/pdf" });
    let shared = false;
    const result = deliverCv(file, {
      coarse: true,
      canShare: () => true,
      share: async (data) => {
        assert.equal(data.files?.[0], file);
        assert.equal(data.files?.[0]?.type, "application/pdf");
        shared = true;
      },
      download: () => assert.fail("Supported mobile sharing should not download twice"),
    });
    assert.equal(shared, true);
    await result;
  });
  test(`${cv.filename} downloads without mobile file-sharing support`, async () => {
    const file = new File(["%PDF-"], cv.filename, { type: "application/pdf" });
    let downloaded: File | undefined;
    await deliverCv(file, { coarse: true, download: (value) => { downloaded = value; } });
    assert.equal(downloaded, file);
  });
}

test("cancelling the share sheet does not trigger another download", async () => {
  await deliverCv(new File(["%PDF-"], "cv.pdf"), {
    coarse: true,
    canShare: () => true,
    share: async () => { throw new DOMException("Cancelled", "AbortError"); },
    download: () => assert.fail("Cancellation must be respected"),
  });
});