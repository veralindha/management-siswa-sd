import Head from "next/head";
import Dashboard from "../../components/dashboard";
import Layout from "../../components/layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={1}>
        <Dashboard />
      </Layout>
    </>
  );
};

export default index;
