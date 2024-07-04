import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Button,
	Dialog,
	DialogBody,
	Typography,
} from '@material-tailwind/react';
import { StatisticsCard } from '@/admin/widgets/cards';
import {
	getPdb,
	getPk,
	getRailway,
} from '@/superAdmin/dashboard/apiFunction.jsx';
import { api, config, setConfig } from '@/api/api.jsx';
import { TabsWithWork } from './tabs';
import { Checkbox } from '@material-tailwind/react';
import axios from 'axios';

export function Home() {
	const [pdModal, setPdModal] = useState(false);
	const [selectedKmIndex, setSelectedKmIndex] = useState(null);
	const [firstNamePdb, setFirstNamePdb] = useState('');
	const [pdb, setPdb] = useState(null);
	const [railway, setRailway] = useState(null);
	const [getMe, setGetme] = useState(null);
	const [pk, setPk] = useState(null);
	const today = new Date();
	const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
	const todayDate = today.toLocaleDateString('uz-UZ', options);
	const [pkId, setPkId] = useState([]);

	const closePdModal = () => setPdModal(false);
	const openPdModal = () => setPdModal(true);

	useEffect(() => {
		setConfig();
		getPdb(setPdb);
		getRailway(null, setRailway);
		getPk(null, setPk);
		axios.get(`${api}user/getMe`, config).then(res => {
			setGetme(res.data.body);
		});
	}, []);

	const handleKmButtonClick = index => setSelectedKmIndex(index);

	function addProductIds(checked, item) {
		const uniqueNumbers = Array.from(new Set(pkId));
		if (checked) setPkId([...uniqueNumbers, item.id]);
		else setPkId(uniqueNumbers.filter(num => num !== item.id));
	}

	return (
		<div className='mt-12'>
			<div className='mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
				<Card>
					<CardHeader
						variant='gradient'
						color='gray'
						className='mb-8 flex items-center justify-between p-6'
					>
						<div className='flex gap-5'>
							{pdb && pdb.length !== 0 ? (
								pdb.map(item => (
									<Button
										key={item.id}
										onClick={() => {
											setFirstNamePdb(item);
											getRailway(item.id, setRailway);
										}}
										className='bg-[#fff] text-black text-lg px-5 py-2 rounded-md'
									>
										{item.name}
									</Button>
								))
							) : (
								<Button className='bg-[#fff] text-black text-lg px-5 py-2 rounded-md'>
									PDB Yo&apos;q
								</Button>
							)}
						</div>
					</CardHeader>
					<div className='px-6 flex bg-gray-300 justify-center items-center gap-3 md:justify-end'>
						<h1 className='text-4xl font-semibold text-black'>
							{getMe ? getMe.pdName : 'PD'}
						</h1>
						<div class='overflow-x-auto'>
							<table class='w-full min-w-max table-auto text-left'>
								<tbody>
									<tr>
										<td class='text-black font-medium border-r-2 border-b-2 border-black border-solid px-1 text-xl'>
											{getMe ? getMe.pdName : 'PD'}
										</td>
										<td class='px-1 text-xl text-black font-medium border-b-2 border-solid border-black'>
											{getMe ? getMe.firstName : 'Hodim'}{' '}
											{getMe ? getMe.lastName : ''}
										</td>
									</tr>

									<tr>
										<td class='text-black font-medium border-r-2 border-black border-solid px-1 text-xl'>
											<span class='hidden sm:inline'>
												{firstNamePdb ? firstNamePdb.name : "Malumot yo'q"}
											</span>
										</td>
										<td class='text-black font-medium border-black border-solid px-1 text-xl'>
											<span class='hidden sm:inline'>
												{firstNamePdb
													? firstNamePdb.userFullName
													: "Malumot yo'q"}
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<CardBody className='md:overflow-x-auto flex gap-3 flex-wrap'>
						{railway ? (
							railway.length !== 0 ? (
								railway.map((item, index) => (
									<Button
										onClick={() => {
											getPk(item.id, setPk);
											handleKmButtonClick(index);
										}}
										className={`bg-[#fff] text-black text-lg px-5 py-2 rounded-md border-[1px] border-solid border-gray-500 transition-all hover:scale-105 ${
											selectedKmIndex === index ? 'bg-gray-500' : ''
										}`}
									>
										{item['km']} km
									</Button>
								))
							) : (
								<Typography
									onClick={() => setPk(null)}
									className={` text-2xl `}
								>
									Biror bir PDB tanlang !!!
								</Typography>
							)
						) : (
							<Typography onClick={() => setPk(null)} className={` text-2xl `}>
								Biror bir PDB tanlang !!!
							</Typography>
						)}
					</CardBody>
				</Card>
				{/* New Table */}
				<table>
					<CardBody className='md:overflow-x-auto flex gap-3 flex-wrap'>
						{pk ? (
							pk.map(item => (
								<Button
									key={item.id}
									className={`bg-[#fff] flex items-center flex-wrap text-black text-lg px-5 py-2 rounded-md border-[1px] border-solid border-gray-500 transition-all hover:scale-105`}
									disabled={item.dayPlanIsActive === true}
								>
									<Checkbox
										onClick={e => addProductIds(e.target.checked, item)}
										defaultChecked={
											item.dayPlanIsActive === true ? true : false
										}
									/>
									{item.name}
								</Button>
							))
						) : (
							<p>PK lar mavjud emas!!!</p>
						)}
						<Button
							className={` ${pkId.length == 0 ? 'hidden' : ''} `}
							onClick={() => openPdModal()}
						>
							Submit
						</Button>
					</CardBody>
				</table>
			</div>
			<div>
				<Dialog open={pdModal} handler={closePdModal}>
					<Dialog open={pdModal} handler={closePdModal}>
						<DialogBody className='sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl overflow-y-auto max-h-screen'>
							<TabsWithWork pk={pkId} onClose={closePdModal} setPk={setPk} />
						</DialogBody>
					</Dialog>
				</Dialog>
			</div>
		</div>
	);
}

export default Home;
