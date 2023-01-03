import Head from "next/head";
import Layout from "../../components/layout";
import TambahUser from "../../components/tambahUser";
const FormUser = () => {
  return (
    <>
      <Head>
        <title>Tambah User</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <TambahUser />
      </Layout>
    </>
  )
}
export default FormUser;