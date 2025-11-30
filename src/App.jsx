import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import "./App.css";

import PageNav from "./components/PageNav";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// dist/index.html                   0.45 kB │ gzip:   0.29 kB
// dist/assets/index-DPD8Hfue.css   65.15 kB │ gzip:  14.74 kB
// dist/assets/index-BoeZbMtL.js   578.00 kB │ gzip: 170.32 kB

function App() {
  return (
    <>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<PageNav />}>
                  <Route index element={<Homepage />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="product" element={<Product />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route element={<CityList />} />
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />
                  <Route path="country" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="login" element={<Login />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
