import Head from "next/head";
import Layout from "../../../components/layout";
import TambahData from "../../../components/tambahData";
const FormData = () => {
  return (
    <>
      <Head>
        <title>Tambah Data</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={2}>
        <TambahData />
      </Layout>
    </>
  )
}
export default FormData;