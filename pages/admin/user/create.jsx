import Head from "next/head";
import Layout from "../../../components/layout";
import TambahUser from "../../../components/tambahUser";

const CreateUserPage = () => {
  return (
    <>
      <Head>
        <title>User Management</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={3}>
        <TambahUser/>
      </Layout>
    </>
  );
}

export default CreateUserPage;
