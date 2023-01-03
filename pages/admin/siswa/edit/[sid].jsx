import Head from "next/head";
import Layout from "../../../../components/layout";
import EditData from "../../../../components/editData";
import { useRouter } from "next/router";

const FormData = () => {
  const router = useRouter();
  const { sid } = router.query;
  return (
    <>
      <Head>
        <title>Edit Data</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={2}>
        <EditData siswaId={sid}/>
      </Layout>
    </>
  )
}
export default FormData;