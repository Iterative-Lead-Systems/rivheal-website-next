import type { Metadata } from "next";
import RequestDemoContent from "@/domain/request-content/RequestContent";

export const metadata: Metadata = {
  title: { absolute: "Request a RivHeal Demo | Get Started" },
  description:
    "Request a RivHeal demo to explore its healthcare technology and discuss how it may support your organisation.",
  alternates: { canonical: "/request-demo" },
};

export default function RequestDemoPage() {
  return <RequestDemoContent />;
}
