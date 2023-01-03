import Head from "next/head";
import Layout from "../../../components/layout";
import Main from "../../../components/main";

const SiswaManagementPage = () => {
  return (
    <>
      <Head>
        <title>Data Siswa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={2}>
        <Main />
      </Layout>
    </>
  )
}

export default SiswaManagementPage;
