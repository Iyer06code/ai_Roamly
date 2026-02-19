import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // ensure Turbopack uses the correct project root when multiple
  // lockfiles are present in the workspace (the root of this package)
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
