import Login from "./pages/Login";
import UserActivities from "./pages/UserActivities";
import UserSongs from "./pages/UserSongs";
import AuthorInfo from "./pages/AuthorInfo";
import LicenseAgreement from "./pages/LicenseAgreement";
import AboutUs from "./pages/AboutUs";

export const privateRoutes = [{
  path: '/useractivities', component: UserActivities, exact: true
}, {
  path: '/usersongs', component: UserSongs, exact: true
}, {
  path: '/usersongs/:author', component: AuthorInfo, exact: true
}, {
  path: '/licenseagreement', component: LicenseAgreement, exact: true
}, {
  path: '/aboutus', component: AboutUs, exact: true
}];

export const publickRoutes = [{
  path: '/login', component: Login, exact: true
}, {
  path: '/licenseagreement', component: LicenseAgreement, exact: true
}, {
  path: '/aboutus', component: AboutUs, exact: true
}];