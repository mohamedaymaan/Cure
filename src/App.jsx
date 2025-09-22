import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Notification from "./Component/Notification";
// Page Profile
import ProfilePage from "./Profile/ProfilePage";
import EditProfile from "./Profile/EditProfile";
import Settings from "./Profile/Settings";
import PaymentMethod from "./Profile/PaymentMethod";
import EmptyCards from "./Profile/EmptyCards";
import PasswordManagement from "./Profile/PasswordManagement";
import VisaVersion from "./Profile/VisaVersion";
import AddNewCard from "./Profile/AddNewCard";
import FAQs from "./Profile/FAQs";
import PrivacyPolicy from "./Profile/PrivacyPolicy";
import Favorite from "./Component/Favorite";
import Done from "./Profile/Done";
// import CardsWrapper from "./Profile/CardsWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/profile",
      children: [
        { index: true, element: <ProfilePage /> },
        { path: "edit", element: <EditProfile /> },
        { path: "settings", element: <Settings /> },
        { path: "payment-method", element: <PaymentMethod /> },
        { path: "empty-cards", element: <EmptyCards /> },
        { path: "password-management", element: <PasswordManagement /> },
        // { path: "cards-wrapper", element: <CardsWrapper /> },
        { path: "visa-version", element: <VisaVersion /> },
        { path: "add-new-card", element: <AddNewCard /> },
        { path: "faqs", element: <FAQs /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "done", element: <Done /> },
      ],
    },
    { path: "notification", element: <Notification /> },
    { path: "favorite", element: <Favorite /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
