import type { Metadata } from "next";
import FreelanceClientPage from "./freelance-client";

export const metadata: Metadata = {
  title: "PB Studio | Web & Product Engineering",
  description:
    "PB Studio is the freelance web and product engineering brand of Phuoc Bui, building modern business websites, scalable web applications, and backend-powered product systems."
};

export default function FreelancePage() {
  return <FreelanceClientPage />;
}
