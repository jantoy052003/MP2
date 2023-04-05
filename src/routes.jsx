import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Nav from './pages/navigation/Nav'
import Home from './pages/navigation/browser/Home'
import Popular from './pages/navigation/browser/Popular'
import NewReleases from './pages/navigation/browser/NewReleases'
import UpcomingMovies from './pages/navigation/browser/UpcomingMovies'
import MyList from './pages/navigation/browser/MyList'

const routes = [
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/home",
         element: <Home />,
      },
      {
        path: "/popular",
         element: <Popular />,
      },
      {
        path: "/newreleases",
         element: <NewReleases />,
      },
      {
        path: "/upcomingmovies",
         element: <UpcomingMovies />,
      },
      {
        path: "/mylist",
         element: <MyList />,
      }
    ]
  }
]

export default routes