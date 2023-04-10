//--------------REACT--------------
import { lazy, useEffect } from 'react';

//--------------REDUX--------------
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/operations';
// import { selectIsLoading, selectError } from 'redux/Contacts/selectors';

//--------------COMPONENTS---------
import { Layout } from 'components/Layout/Layout';

//------------ROUTER-------------
import { Route, Routes } from 'react-router-dom';
//---------------PAGES----------------
const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const ContactPage = lazy(() => import('../../pages/Contacts/Contacts'));

export function App() {
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectError);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
    // <Conteiner>
    //   <RegisterForm />
    //   <LoginForm />
    //   <Title>
    //     PHONEBOOK
    //     <BsFillTelephonePlusFill />
    //   </Title>
    //   <Form />
    //   <ContactsTitle>
    //     Contacts <IoMdContact />
    //   </ContactsTitle>
    //   <Input />
    //   {isLoading && !isError && <b>Loading contacts...</b>}
    //   <ContactList />
    // </Conteiner>
  );
}
