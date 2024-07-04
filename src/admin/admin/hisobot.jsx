import React, { useEffect, useState } from 'react';
import {
	Typography,
	Card,
	CardHeader,
	CardBody,
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Select,
	Option,
} from '@material-tailwind/react';
import {
	CheckCircleIcon,
	UserPlusIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid';
import { api, config, setConfig } from '@/api/api';
import axios from 'axios';
import Download from '@/superAdmin/dashboard/download';
import { StatisticsCard } from '../widgets/cards';
import empatyFolder from '../../../public/img/empty-folder.png';

export function Hisobot() {
	const [elseModal, setElseModal] = useState(false);
	const [toolModal, setToolModal] = useState(false);
	const [todayModal, setTodayModal] = useState(false);
	const [tomorrowModal, setTomorrowModal] = useState(false);
	const [isModalDown, setIsModalDown] = useState(false);
	const [dayPlan, setDayPlan] = useState(null);
	const [adminUsers, setAdminUsers] = useState(null);
	const [pdbList, setPdbList] = useState(null);
	const [railwayList, setRailwayList] = useState(null);
	const [pkList, setPkList] = useState(null);

	useEffect(() => {
		setConfig();
		getUserAdmin();
	}, []);

	const openElseModal = () => setElseModal(true);
	const closeElseModal = () => setElseModal(false);
	const openToolModal = () => setToolModal(true);
	const closeToolModal = () => setToolModal(false);
	const handleOpenTodayModal = () => setTodayModal(true);
	const handleCloseTodayModal = () => setTodayModal(false);
	const handleOpenTomorrowModal = () => setTomorrowModal(true);
	const handleCloseTomorrowModal = () => setTomorrowModal(false);
	const openDown = () => setIsModalDown(true);
	const closeDown = () => setIsModalDown(false);
	const [toggleInfo, setToggleInfo] = useState(false);
	const [pdbInfo, setPdbInfo] = useState([]);
	const [date, setDate] = useState('');

	const TABLE_HEAD = [
		'KM',
		'PK',
		'Ertangi ishlar rejasi',
		'Bugungi ish rejasi',
		'Jami ishchi',
		'Xizmat safarida', // tripCount
		"O'qishda", // restCount
		'Otgul', // vacationCount
		'Kasallar soni', // sickCount
		'B/S', // onTrainingCount
		"Mehnat ta'tilida", //onHolidayCount
		'Ish qurollari', //
		'Soni', // workToolList.count
	];

	// getUserAdmin
	const getUserAdmin = date => {
		axios
			.get(`${api}pd/work-pd/all?localDate=${date}`, config)
			.then(res => {
				if (res.status === 200) {
					setAdminUsers(res.data.body);
				} else setAdminUsers(null);
			})
			.catch(err => {});
	};

	// get pdb
	const getPDB = id => {
		if (id) {
			axios
				.get(`${api}pdb/list?pdId=${id}`, config)
				.then(res => {
					if (res.status === 200) setPdbList(res.data.body);
					else setPdbList(null);
				})
				.catch(err => {});
		} else setPdbList(null);
	};

	const handleInfo = async id => {
		setToggleInfo(true);
		try {
			const { data } = await axios.get(
				`${api}pdb/get/info/${id}?localDate=${date}`,
				config
			);
			setPdbInfo(data.body);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div>
				<div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
					<StatisticsCard />
				</div>
				<div className='mb-6 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
					<Card>
						<CardHeader
							variant='gradient'
							color='gray'
							className='mb-8 flex items-center justify-between p-6'
						>
							<Typography variant='h6' color='white'>
								Boshqaruv paneli
							</Typography>
							<Button onClick={openDown} variant={`gradient`} color={`green`}>
								Yuklash
							</Button>
						</CardHeader>
						<CardBody className='md:overflow-x-scroll'>
							{/*select*/}
							<div className='mb-6 flex flex-col md:flex-row md:gap-5 gap-5'>
								<div className='w-52'>
									{/* <Select onChange={id => getPDB(id)} label="Bo'linmani tanlang">
									{adminUsers && adminUsers.length !== 0 ? (
										adminUsers.map(item => (
											<Option value={item.id}>{item.name}</Option>
										))
									) : (
										<Option disabled>Ma'lumot yo'q</Option>
									)}
								</Select>
							</div>
							<div className='w-52'>
								<Select
									onChange={id => getRailway(id)}
									label='Brigadani tanlang'
								>
									{pdbList && pdbList.length !== 0 ? (
										pdbList.map(item => (
											<Option value={item.id}>{item.name}</Option>
										))
									) : (
										<Option disabled>Ma'lumot yo'q</Option>
									)}
								</Select>
							</div>
							<div className='w-52'>
								<Select
									onChange={id => getPK(id)}
									label='Masofani tanalng (km)'
								>
									{railwayList && railwayList.length !== 0 ? (
										railwayList.map(item => (
											<Option value={item.id}>{item.km} km</Option>
										))
									) : (
										<Option disabled>Ma'lumot yo'q</Option>
									)}
								</Select> */}
								</div>
							</div>
							<div className='w-32'>
								<Input
									onChange={e => {
										setDate(e.target.value);
										getUserAdmin(e.target.value);
									}}
									type='date'
								/>
							</div>
							<div className='overflow-x-auto'>
								<table className='w-full min-w-full table-auto'>
									<thead>
										<tr>
											<th
												className={`border-b border-blue-gray-200 py-3 px-5 text-left`}
											>
												№
											</th>
											<th className='border-b border-blue-gray-200 py-3 px-5 text-left'>
												<Typography
													variant='small'
													className='text-sm font-bold uppercase text-blue-gray-400'
												>
													BO'LINMA
												</Typography>
											</th>
											<th
												colSpan={100000}
												className='border-b border-blue-gray-200 py-3 px-5 text-left'
											>
												<Typography
													variant='small'
													className='text-sm font-bold uppercase text-blue-gray-400'
												>
													BRIGADALAR
												</Typography>
											</th>
										</tr>
									</thead>
									<tbody>
										{adminUsers && adminUsers.length !== 0 ? (
											adminUsers.map((item, i) => (
												<tr onClick={() => getPDB(item.id)}>
													<td className='border-b border-blue-gray-200 py-3 px-5'>
														{i + 1}
													</td>
													<td className='border-b border-blue-gray-200 py-3 px-5'>
														<div className='flex items-center gap-4'>
															<span>{item.name}</span>
														</div>
													</td>
													{item.pdbList ? (
														item.pdbList.map(pdb => {
															return (
																<td className='border-b border-blue-gray-200 py-3 px-5'>
																	<div
																		onClick={() => handleInfo(pdb.id)}
																		className='flex cursor-pointer items-center gap-2'
																	>
																		<p
																			className={
																				pdb.work
																					? 'text-green-500'
																					: 'text-red-500'
																			}
																		>
																			{pdb.name}
																		</p>
																	</div>
																</td>
															);
														})
													) : (
														<td>Information not found</td>
													)}
												</tr>
											))
										) : (
											<tr>
												<td className='py-3'>
													<Typography
														variant='small'
														className='text-sm mx-auto text-center font-bold uppercase text-black'
													>
														<img src={empatyFolder} alt='' />
													</Typography>
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</CardBody>
					</Card>
				</div>

				{/*download*/}
				<Download isModalDown={isModalDown} closeDown={closeDown} />

				{/* TODAY PLAN */}
				<Dialog open={todayModal} onClose={handleCloseTodayModal}>
					<DialogHeader>Bugungi ishlar</DialogHeader>
					<DialogBody>
						<Typography
							variant='small'
							className='text-sm text-center font-bold uppercase text-black'
						>
							{dayPlan ? dayPlan.todayPlan : 'Malumot mavjud emas'}
						</Typography>
					</DialogBody>
					<DialogFooter>
						<Button onClick={handleCloseTodayModal}>Close Modal</Button>
					</DialogFooter>
				</Dialog>

				{/* TOMORROW PLAN */}
				<Dialog open={tomorrowModal} onClose={handleCloseTomorrowModal}>
					<DialogHeader>Ertangi ishlar</DialogHeader>
					<DialogBody>
						<Typography
							variant='small'
							className='text-sm text-center font-bold uppercase text-black'
						>
							{dayPlan ? dayPlan.tomorrowPlan : 'Malumot mavjud emas'}
						</Typography>
					</DialogBody>
					<DialogFooter>
						<Button onClick={handleCloseTomorrowModal}>Close Modal</Button>
					</DialogFooter>
				</Dialog>

				{/* TOOLS */}
				<Dialog open={toolModal} onClose={closeToolModal}>
					<DialogHeader>Ish qurollari</DialogHeader>
					<DialogBody>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4'>
							{dayPlan &&
								dayPlan.resDayTools.length !== 0 &&
								dayPlan.resDayTools.map((item, i) => (
									<div className='flex justify-between'>
										<Typography
											variant='small'
											className='text-sm text-center font-bold uppercase text-black'
										>
											{item.resWorkToolNamd}
										</Typography>
										<Typography
											variant='small'
											className='text-sm text-center font-bold uppercase text-blue-gray-500'
										>
											{item.count}
										</Typography>
									</div>
								))}
						</div>
					</DialogBody>
					<DialogFooter>
						<Button onClick={closeToolModal}>Close Modal</Button>
					</DialogFooter>
				</Dialog>

				{/* ELSE PLAN */}
				<Dialog size='lg' open={elseModal} onClose={closeElseModal}>
					<DialogHeader>Qo'shimcha malumotlar</DialogHeader>
					<DialogBody className=''>
						<div className='overflow-y-auto'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4'>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Ishchilar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.employeeCount : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Bemorlar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.sickCount : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Ishdan javob olganlar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.restCount : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Komandirofkadagilar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.tripCount : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Dam oluvchilar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.vacationCount : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Malaka oshirishdagilar soni:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.onTrainingCount : "Malumot yo'q"}
									</Typography>
								</div>
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4 mt-4'>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Rels uzatgichlari ST:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.relayConnectorsST : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Rels uzatgichlari PR:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.relayConnectorsPR : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Ximoya sticklari ST:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.protectionStackST : "Malumot yo'q"}
									</Typography>
								</div>
								<div className='flex justify-between'>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-black'
									>
										Ximoya sticklari PR:
									</Typography>
									<Typography
										variant='small'
										className='text-sm text-center font-bold uppercase text-blue-gray-500'
									>
										{dayPlan ? dayPlan.protectionStackPR : "Malumot yo'q"}
									</Typography>
								</div>
							</div>
						</div>
					</DialogBody>
					<DialogFooter>
						<Button onClick={closeElseModal}>Close Modal</Button>
					</DialogFooter>
				</Dialog>
			</div>
			<Dialog
				className='overflow-y-auto w-full max-h-screen'
				size='xl'
				open={toggleInfo}
				onClose={() => setToggleInfo(false)}
			>
				<DialogHeader>
					<h1>PDB ma'lumotlari</h1>
				</DialogHeader>
				<DialogBody>
					<Card className='h-full w-full overflow-scroll'>
						<table className='w-full min-w-max table-auto text-center'>
							<thead>
								<tr>
									{TABLE_HEAD.map(head => (
										<th
											key={head}
											className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
										>
											<Typography
												variant='small'
												color='blue-gray'
												className='text-lg font-medium leading-none opacity-70'
											>
												{head}
											</Typography>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{pdbInfo.length !== 0 ? (
									pdbInfo.map(
										(
											{
												railwayKmName,
												pkNameList,
												tomorrowPlan,
												employeeCount,
												tripCount,
												restCount,
												vacationCount,
												workToolList,
												sickCount,
												onTrainingCount,
												onHolidayCount,
												todayPlan,
											},
											index
										) => (
											<tr
												key={railwayKmName}
												className='even:bg-blue-gray-50/50 text-center'
											>
												<td className='p-4 text-center'>
													<Typography
														variant='small'
														color='blue-gray'
														className='font-normal text-lg'
													>
														{railwayKmName}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														variant='small'
														color='blue-gray'
														className='font-normal flex gap-3 text-lg'
													>
														{pkNameList &&
															pkNameList.map(item => <p>{item}</p>)}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														variant='small'
														color='blue-gray'
														className='font-normal text-lg'
													>
														{tomorrowPlan}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														variant='small'
														color='blue-gray'
														className='font-normal text-lg'
													>
														{todayPlan ? 'Bajarildi' : 'Bajarilmadi'}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{employeeCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{tripCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{restCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{vacationCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{sickCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{onTrainingCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{onHolidayCount}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{workToolList.map(item => (
															<p>{item.resWorkToolNamd}</p>
														))}
													</Typography>
												</td>
												<td className='p-4'>
													<Typography
														as='a'
														href='#'
														variant='small'
														color='blue-gray'
														className='font-medium text-lg'
													>
														{workToolList.map(item => (
															<p>{item.count}</p>
														))}
													</Typography>
												</td>
											</tr>
										)
									)
								) : (
									<tr>
										<td className='py-3'>
											<Typography
												variant='small'
												className='text-sm mx-auto text-center font-bold uppercase text-black'
											>
												<img src={empatyFolder} alt='' />
											</Typography>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</Card>
				</DialogBody>
				<DialogFooter>
					<Button onClick={() => setToggleInfo(false)}>Yopish</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}

export default Hisobot;
