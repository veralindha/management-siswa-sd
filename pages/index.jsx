import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const data = {
      username: username,
      password: password
    };
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.message == 'success') {
          document.cookie = `sessionID=${res.data.sessionData}`
          router.push('/admin');
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Login failed!',
            icon: 'error'
          });
        }
      });

  }

  useEffect(() => {
    const session = document.cookie;
    if (session) {
      router.push('/admin');
    }
  })
  
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <Image className="mt-2"
              src="/logo.png"
              alt="Picture of the author"
              width={60}
              height={60}
            />
          </div>
          {/* Login Form */}
          <form action="">
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="button" className="fadeIn fourth" defaultValue="Log In" onClick={() => handleLogin()} />
          </form>
        </div>
      </div>

    </>
  )
}
export default Login;