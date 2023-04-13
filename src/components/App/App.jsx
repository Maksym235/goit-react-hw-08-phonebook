//--------------REACT--------------
import { lazy, useEffect } from 'react';

//--------------REDUX--------------
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/Auth/authOperations';
import { useAuth } from 'components/hooks/useAuth';

// import { fetchContacts } from 'redux/Contacts/operations';
// import { selectIsLoading, selectError } from 'redux/Contacts/selectors';

//--------------COMPONENTS---------
import { Layout } from 'components/Layout/Layout';

//------------ROUTER-------------
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
//---------------PAGES----------------
const HomePage = lazy(() => import('../../pages/Home/Home'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const ContactPage = lazy(() => import('../../pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectError);

  return isRefresh ? (
    <h5>Refreshing user, please wait...</h5>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

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
