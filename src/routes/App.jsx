import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "@components/Header";
import { AccountPage } from "@pages/AccountPage";
import { CheckoutPage } from "@pages/CheckoutPage";
import { HomePage } from "@pages/HomePage";
import { LoginPage } from "@pages/LoginPage";
import { NewPasswordPage } from "@pages/NewPasswordPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { OrdersPage } from "@pages/OrdersPage";
import { RecoveryPasswordPage } from "@pages/RecoveryPasswordPage";
import { SendEmailPage } from "@pages/SendEmailPage";
import { SingUpPage } from "@pages/SingUpPage";
import { AppContext } from "@context/AppContext";
import { useInitialState } from "@hooks/useInitialState";
import { useDataUser } from "@hooks/useDataUser";
import { ProductDetailPage } from "@pages/ProductDetailPage";
const App = () => {
  const initialState = useInitialState();
  const dataUser = useDataUser();
  return (
    <AppContext.Provider value={{ initialState, dataUser }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/password-recovery"
          element={<RecoveryPasswordPage />}
        />
        <Route exact path="/send-email" element={<SendEmailPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route exact path="/new-password" element={<NewPasswordPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/singup" element={<SingUpPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/orders" element={<OrdersPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
