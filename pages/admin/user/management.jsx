import Head from "next/head";
import Layout from "../../../components/layout";
import User from "../../../components/user";

const UserManagementPage = () => {
  return (
    <>
      <Head>
        <title>User Management</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout isActiveNavLink={3}>
        <User />
      </Layout>
    </>
  )
}

export default UserManagementPage;
