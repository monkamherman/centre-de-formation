import { createBrowserRouter, Outlet } from 'react-router-dom'
import Footer from '@/layouts/footer/Footer'
import authRoutes from './routes-config/authRoutes'
import ScrollToTop from '@/components/custom/utils/ScrollToTop'
import PrivateRoute from '@/components/custom/utils/PrivateRoute'
import DynamicPageLoader from '@/components/custom/utils/LazyCompoment'
import Header from '@/layouts/navbar/Header'
/**
 * Creates a router with specified routes and elements for each route.
 * @param {Array} routes - An array of route objects containing path and element information.
 * @returns None
 */

const Router = createBrowserRouter([
	{
		path: '',
		element: (
			<>
				<Outlet />

				{/* To scroll to top each time that we change routes */}
				<ScrollToTop />
			</>
		),

		// Page erreur
		errorElement: <DynamicPageLoader pageKey="error/PageError" />,

		children: [
			{
				path: '/',
				element: <>
					<Header darkMode={false} setDarkMode={function (): void {
						throw new Error('Function not implemented.')
					} } />
					<div className='max-w-screen'>
						<Outlet />
					</div>
					<Footer />
				</>,
				children: [
					{
						path: '/',
						element: <DynamicPageLoader pageKey="home/Home" />
					},

					// Exemple of private route
					{
						path: '/account',
						element: (
							<PrivateRoute>
								<>User Account</>
							</PrivateRoute>
						)
					},

					// Authentication routes part
					authRoutes,
				]
			},
		],
	},
])

export default Router