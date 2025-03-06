import { ReactNode } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home(): ReactNode {
  return (
    <Layout title="System Design Notes">
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome</h1>
        <Link className="button button--primary" to="/docs/intro">
          Go to Documents
        </Link>
      </main>
    </Layout>
  );
}
