import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';
import { DarkModeProvider } from './context/DarkModeContext';
import ProtectedRoute from './ui/ProtectedRoute.tsx';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Login = lazy(() => import('./pages/Login'));
const Users = lazy(() => import('./pages/Users'));
const Cabins = lazy(() => import('./pages/Cabins'));
const Account = lazy(() => import('./pages/Account'));
const Settings = lazy(() => import('./pages/Settings'));
const Booking = lazy(() => import('./pages/Booking.tsx'));
const Checkin = lazy(() => import('./pages/Checkin.tsx'));
const AppLayout = lazy(() => import('./ui/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
import SpinnerFullPage from './ui/SpinnerFullPage.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <SpinnerFullPage />
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<Checkin />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;
