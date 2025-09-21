import { Navigation } from 'components/Navigation'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { CustomsPage } from './customs/page'
import { IssuePage } from './issues/page'
import { StartPage } from './page'
import { Providers } from './providers'

const r = createBrowserRouter([
  {
    element: (
      <Providers>
        <Navigation />
        <Outlet />
      </Providers>
    ),
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
      { path: '/issues', element: <IssuePage /> },
      { path: '/customs', element: <CustomsPage /> },
      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
])
export const Router = () => {
  return <RouterProvider router={r} />
}
