import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahan Tharuka — QA Automation Engineer Portfolio" },
      { name: "description", content: "Sahan Tharuka — CS undergraduate @NSBM. QA Automation Engineer building Selenium, Cucumber BDD, REST Assured & CI/CD frameworks." },
      { property: "og:title", content: "Sahan Tharuka — QA Automation Engineer" },
      { property: "og:description", content: "Animated portfolio showcasing QA automation projects, certifications and journey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});
