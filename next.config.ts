import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdfjs-dist", "unpdf", "mammoth"],
};

export default nextConfig;
