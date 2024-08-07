import {
	HomeIcon,
	TableCellsIcon,
	GlobeAltIcon,
	UsersIcon,
	MapPinIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';
import {
	Home,
	Tables,
	PDBusers,
	Observes,
	Tools,
	AddLocation,
} from '@/superAdmin/dashboard';
import { SignIn, SignUp } from '@/auth';
import { PdUsers } from './dashboard/pdUsers';
import HomeLanding from '../landing_page/home.jsx';
import { Tool } from './dashboard/tool';

const icon = {
	className: 'w-5 h-5 text-inherit',
};
const logout = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='w-6 h-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
		/>
	</svg>
);
export const routes = [
	{
		layout: 'super-admin',
		pages: [
			{
				icon: <HomeIcon {...icon} />,
				name: 'Boshqaruv Paneli',
				path: '/boshqaruv-paneli',
				element: <Home />,
			},
			// sa
			{
				icon: <TableCellsIcon {...icon} />,
				name: 'Hodimlar',
				path: '/hodimlar',
				element: <Tables />,
			},
			{
				icon: <TableCellsIcon {...icon} />,
				name: "Yo'l ustalari",
				path: '/pd',
				element: <PdUsers />,
			},
			{
				icon: <UsersIcon {...icon} />,
				name: "Yo'l brigadalari ro'yxati",
				path: '/jadval',
				element: <PDBusers />,
			},
			// sa
			{
				icon: <UsersIcon {...icon} />,
				name: "Kuzatuvchilar ro'yxati",
				path: '/kuzatuv',
				element: <Observes />,
			},

			{
				icon: <WrenchScrewdriverIcon {...icon} />,
				name: 'Ish qurollar',
				path: '/asboblar',
				element: <Tools />,
			},
			{
				icon: <WrenchScrewdriverIcon {...icon} />,
				name: 'Ish',
				path: '/work',
				element: <Tool />,
			},
			{
				icon: <MapPinIcon {...icon} />,
				name: "Yo'l masofasi",
				path: '/Manzil',
				element: <AddLocation />,
			},
		],
	},
	{
		layout: 'home',
		pages: [
			{
				icon: <GlobeAltIcon {...icon} />,
				name: 'Veb-saytga kirish',
				path: '/',
				element: <HomeLanding />,
			},
		],
	},
	{
		layout: 'auth',
		pages: [
			// {
			//     icon: <GlobeAltIcon {...icon} />,
			//     name: "Veb-saytga kirish",
			//     path: ' https://themecrafter.com/kyber/elementor/homepage-02/',
			//     element: <SignUp/>,
			// },
			{
				icon: logout,
				name: 'Tizimdan Chiqish',
				path: '/log-in',
				element: <SignIn />,
			},
		],
	},
];

export default routes;
