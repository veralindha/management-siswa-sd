import Head from "next/head";
import Layout from "../../../../components/layout";
import EditUser from "../../../../components/editUser";
import { useRouter } from "next/router";

const FormUser = () => {
  const router = useRouter();
  const { uid } = router.query;
  return (
    <>
      <Head>
        <title>Edit User</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={3}>
        <EditUser userId={uid}/>
      </Layout>
    </>
  )
}
export default FormUser;