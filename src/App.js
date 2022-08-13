import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './Banner';
import Form from './Form';
import Footer from './Footer';
import Tabel from './Tabel';
// import Dashboard from "./Dashboard";

function App() {
  const adminUser = {
    username: 'admin',
    password: 'admin'
  };

  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);
    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log('berhasil login');
      setUser({
        username: details.username,
        password: details.password
      });
    } else {
      console.log('gagal login');
      setError('Gagal Login Silahkan Coba Lagi');
    }
  };

//   const Logout = () => {
//     console.log('logout');
    
//   };

  return (
    <>
      {user.username !== '' ? (
        <Tabel />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Banner />
              <Form Login={Login} error={error} />
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}
export default App;
