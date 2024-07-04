import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Button,
	Input,
	Option,
	Select,
} from '@material-tailwind/react';
import { UserPlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { api, byId, config, setConfig } from '@/api/api';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

export function PDBusers() {
	const [editModal, setEditModal] = useState(false);
	const [addModal, setAddModal] = useState(false);
	const [pdbUsers, setPdbaUsers] = useState(null);
	const [pdUsers, setPdUsers] = useState(null);
	const [pdbData, setpdbdata] = useState(null);
	const [pdId, setpdId] = useState(null);
	const [pdIdValid, setpdIdValid] = useState(false);
	const [selectPdId, setSelectPdId] = useState(null);
	const [regEX, setRegEX] = useState(true);
	const [deleteModal, setDeleteModal] = useState(false);
	const [pdbId, setPdbId] = useState(null);

	const openEditModal = () => setEditModal(true);
	const closeEditModal = () => setEditModal(false);
	const openAddModal = () => {
		setAddModal(true);
	};
	const closeAddModal = () => {
		setAddModal(false);
		setpdIdValid(false);
		setpdId(null);
		getPD();
	};
	const toggleModal = () => setDeleteModal(!deleteModal);

	useEffect(() => {
		setConfig();
		getPD();
	}, []);

	// *******************GET USER **********************

	const getPD = () => {
		axios
			.get(`${api}pd/all`, config)
			.then(res => {
				if (res.data.success && res.data.body.length !== 0)
					setPdUsers(res.data.body);
				else setPdUsers(null);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const getPDBuser = id => {
		axios
			.get(`${api}pdb/list?pdId=${id}`, config)
			.then(res => {
				if (res.data.success && res.data.body.length !== 0)
					setPdbaUsers(res.data.body);
				else setPdbaUsers(null);
			})
			.catch(err => {
				console.error(err);
			});
	};

	// ---------- PDB add ------------
	const addPdb = () => {
		const addPDBdata = {
			pdId: pdId ? pdId : 0,
			name: byId('addname'),
			userFullName: byId('addlastname'),
		};

		if (pdId) {
			axios
				.post(`${api}pdb`, addPDBdata, config)
				.then(res => {
					closeAddModal();
					getPDBuser(selectPdId ? selectPdId : 0);
					toast.success('Vazifa muvoffaqqiyatli bajarildi!');
				})
				.catch(err => {
					closeAddModal();
					toast.success("PDB o'chirishda xatolik yuz berdi");
				});
		} else {
			toast.error('Brigaderni tanlang ❗️');
			setpdIdValid(true);
		}
	};

	// ----------PDB edit------------
	const editPDB = () => {
		const editPDbdata = {
			pdId: 0,
			name: byId('editName'),
			userFullName: byId('editlastname'),
		};
		axios
			.put(`${api}pdb?id=${pdbData ? pdbData.id : 0}`, editPDbdata, config)
			.then(res => {
				closeEditModal();
				getPDBuser(selectPdId ? selectPdId : 0);
				toast.success('Tahrirlandi!');
			})
			.catch(err => {
				closeEditModal();
				toast.error('PDB tahrirlanmadi');
			});
	};

	// --------------- PDB delete --------------
	const handleDelete = async () => {
		try {
			await axios.delete(`${api}pdb/${pdbId}`, config);
			toast.success('PDB muvoffaqqiyatli tahrirlandi!👌');
			getPDBuser(selectPdId ? selectPdId : 0);
			toggleModal();
		} catch (error) {
			toast.error('PDB tahrirlanmadi❌');
		}
		getPD();
	};

	// RegEX ADD

	const addRegEx = () => {
		// Bosh va oraliq probellarni olib tashlash uchun trim() metodidan foydalanish
		const editPDValue = document.getElementById('addname').value.trim();
		const employeeCountValue = document
			.getElementById('addlastname')
			.value.trim();

		// Har ikkala qiymat ham bo'sh emasligini tekshirish
		if (editPDValue !== '' && employeeCountValue !== '') {
			setRegEX(false); // Agar har ikkala qiymat ham bo'sh emas bo'lsa, regex state'ini false qilib o'rnatish
		} else {
			setRegEX(true); // Aks holda, regex state'ini true qilib o'rnatish
		}
	};

	return (
		<>
			<div className='mt-7 mb-8 flex flex-col gap-12'>
				<Card>
					<CardHeader
						variant='gradient'
						color='gray'
						className='mb-8 flex items-center justify-between p-6'
					>
						<Typography variant='h6' color='white'>
							Yo'l brigaderlar jadvali
						</Typography>
						<Button
							onClick={openAddModal}
							className='bg-[#fff] text-black px-3 py-2 rounded-md'
						>
							<UserPlusIcon className='h-6 w-6 text-black' />
						</Button>
					</CardHeader>
					<CardBody className=' px-0 pt-0 pb-2'>
						{/* <Typography variant="h6" color="gray" className="flex items-center justify-center mb-2 ">
            PD tanlang
          </Typography> */}
						<div className='w-full flex justify-center items-center gap-5'>
							<div className='w-full max-w-[24rem]'>
								<Select
									onChange={e => {
										setSelectPdId(e);
										getPDBuser(e);
									}}
									label="Bo'linmani tanlang"
								>
									{pdUsers ? (
										pdUsers.map((item, i) => (
											<Option key={i} value={item.id}>
												{item.name}
											</Option>
										))
									) : (
										<Option disabled>Malumot yo'q</Option>
									)}
								</Select>
							</div>
						</div>
						<div className='overflow-x-auto'>
							<table className='w-full min-w-[640px] table-auto  '>
								<thead>
									<tr>
										{['#', 'Brigaderlar', 'F.I.O', 'Amallar'].map(el => (
											<th
												key={el}
												className='border-b border-blue-gray-50 py-3 px-5 text-left'
											>
												<Typography
													variant='small'
													className='text-[11px] font-bold uppercase text-blue-gray-400'
												>
													{el}
												</Typography>
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{pdbUsers ? (
										pdbUsers.map((item, i) => {
											const className = `py-3 px-5  ${
												i === pdbUsers && pdbUsers.length - 1
													? ''
													: 'border-b border-blue-gray-50'
											}`;
											return (
												<tr key={i}>
													<td className={className}>
														<div className='flex items-center gap-4'>
															<div>
																<Typography
																	variant='small'
																	className='font-semibold text-blue-gray-600'
																>
																	{i + 1}
																</Typography>
															</div>
														</div>
													</td>
													<td className={className}>
														<div className='flex items-center gap-4'>
															<div>
																<Typography
																	variant='small'
																	color='blue-gray'
																	className='font-semibold'
																>
																	{item.name}
																</Typography>
															</div>
														</div>
													</td>
													<td className={`${className} flex py-5 gap-3`}>
														<Typography
															onClick={() => {
																openEditModal();
																setpdbdata(item);
															}}
															className=' cursor-pointer text-[1.2rem] font-semibold hover:text-yellow-300 duration-150 ease-in-out   text-blue-gray-600'
														>
															<FaEdit />
														</Typography>
														<Typography
															onClick={() => {
																toggleModal();
																setPdbId(item.id);
															}}
															className=' cursor-pointer text-[1.2rem] font-semibold text-red-700 duration-150 ease-in-out'
														>
															<MdDelete />
														</Typography>
													</td>
												</tr>
											);
										})
									) : (
										<tr>
											<td></td>
											<td></td>
											<td className=''>
												<Typography className=' cursor-pointer text-md font-semibold hover:text-red-300 duration-150 ease-in-out text-blue-gray-600'>
													Ma'lumot yo'q
												</Typography>
											</td>
											<td></td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</CardBody>
				</Card>
				{/* Edit pdb  */}
				<div>
					<Dialog open={editModal} handler={closeEditModal}>
						<div>
							<DialogHeader className='flex items-center justify-between'>
								Tahrirlash
								<XMarkIcon
									className='cursor-pointer'
									onClick={closeEditModal}
									width={20}
								/>
							</DialogHeader>
						</div>
						<DialogBody>
							<div className='flex justify-center flex-col items-center gap-7'>
								<div className='w-full max-w-[24rem]'>
									<Input
										defaultValue={pdbData ? pdbData.name : "Ma'lumot yo'q"}
										id='editName'
										label='BRIGADA'
									/>
								</div>
								<div className='w-full max-w-[24rem]'>
									<Input
										defaultValue={
											pdbData ? pdbData.userFullName : "Ma'lumot yo'q"
										}
										id='editlastname'
										label='F.I.O'
									/>
								</div>
							</div>
						</DialogBody>
						<DialogFooter>
							<Button
								variant='text'
								color='red'
								onClick={closeEditModal}
								className='mr-1'
							>
								<span>Orqaga</span>
							</Button>
							<Button onClick={editPDB} variant='gradient' color='gray'>
								<span>Tahrirlash</span>
							</Button>
						</DialogFooter>
					</Dialog>
				</div>

				{/* Add pdb modal */}
				<div>
					<Dialog open={addModal} handler={closeAddModal}>
						<DialogHeader className='flex items-center justify-between'>
							Brigader qo'shish
							<XMarkIcon
								className='cursor-pointer'
								onClick={closeAddModal}
								width={20}
							/>
						</DialogHeader>
						<DialogBody>
							<div className='flex justify-center flex-col items-center gap-7'>
								<div className='w-full max-w-[24rem]'>
									<Input onChange={addRegEx} id='addname' label='Brigadalar' />
								</div>
								<div className='w-full max-w-[24rem]'>
									<Input onChange={addRegEx} id='addlastname' label='F.I.O' />
								</div>
								<div className='w-full max-w-[24rem]'>
									<Select
										className={`${
											pdIdValid
												? 'outline outline-2 outline-offset-2 outline-red-600'
												: ''
										}`}
										onChange={e => {
											setpdId(e);
										}}
										label="Bo'linma tanlang"
									>
										{pdUsers ? (
											pdUsers.map((item, i) => (
												<Option key={i} value={item.id}>
													{item.name}
												</Option>
											))
										) : (
											<Option disabled>Malumot yo'q</Option>
										)}
									</Select>
								</div>
							</div>
						</DialogBody>
						<DialogFooter>
							<Button
								variant='text'
								color='red'
								onClick={closeAddModal}
								className='mr-1'
							>
								<span>Orqaga</span>
							</Button>
							<span className={regEX ? 'cursor-not-allowed' : ''}>
								<Button
									disabled={regEX}
									onClick={addPdb}
									variant='gradient'
									color='gray'
								>
									<span>Qo'shish</span>
								</Button>
							</span>
						</DialogFooter>
					</Dialog>
				</div>
			</div>
			<Dialog open={deleteModal} handler={toggleModal}>
				<DialogHeader>O'chirish</DialogHeader>
				<DialogBody>
					<div className='flex justify-center'>
						<Typography
							variant='large'
							className=' font-bold uppercase text-blue-gray-400'
						>
							Bu ishni o'chirishingizga ishonchingiz komilmi?
						</Typography>
					</div>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={toggleModal}
						className='mr-1'
					>
						<span>Yo'q</span>
					</Button>
					<Button onClick={handleDelete} variant='gradient' color='gray'>
						<span>Ha</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
