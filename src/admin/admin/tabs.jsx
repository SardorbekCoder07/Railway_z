import React, { useEffect, useState } from 'react';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
	Button,
	Input,
	Select,
	Option,
} from '@material-tailwind/react';
import { api, byId, config, setConfig } from '@/api/api';
import { getPk } from '@/superAdmin/dashboard/apiFunction.jsx';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export function TabsWithWork({ pk, onClose, setPkIdIn, getAdminStatistics }) {
	const [selectedTab, setSelectedTab] = useState('html');
	const [tool, setTool] = useState([]);
	const [toolId, setToolId] = useState([]);
	const [inputs, setInputs] = useState({
		employeeCount: '',
		vacationCount: '',
		sickCount: '',
		restCount: '',
		tripCount: '',
		onTrainingCount: '',
		protectionStackST: '',
		protectionStackPR: '',
		relayConnectorsST: '',
		relayConnectorsPR: '',
		tomorrowPlan: '',
		todayPlanID: '',
	});

	const [errors, setErrors] = useState({}); // Xatolar uchun yangi state
	const [work, setWork] = useState([]);

	useEffect(() => {
		setConfig();
		getTool();
		getWork();
	}, []);

	// Inputlarni o'zgartirish uchun ishlatiladigan funksiya
	const handleChange = event => {
		console.log(event);
		setInputs(event);
		// Agar foydalanuvchi input qiymatini o'zgartirsa, xato holatini o'chirib tashlaymiz
		if (errors[event]) {
			setErrors(prev => ({
				...prev,
				[id]: false,
			}));
		}
	};

	const getWork = async () => {
		try {
			const { data } = await axios.get(`${api}work`, config);
			console.log(data);
			setWork(data.body);
		} catch (error) {
			console.log(error);
		}
	};

	// Ma'lumotlarni yuborish
	const handleSubmit = () => {
		const newErrors = {};
		Object.keys(inputs).forEach(key => {
			// Ba'zi maydonlar majburiy emas
			if (
				!inputs[key] &&
				!(key.includes('protectionStack') || key.includes('relayConnectors'))
			) {
				newErrors[key] = true;
			}
		});

		if (Object.keys(newErrors).length > 0) {
			toast.error("Malumotlar to'liq emas❌");
			setErrors(newErrors); // Xatoliklar state'ini yangilaymiz
		} else {
		}
	};

	// Xatolik uslubini qo'llash
	const inputClass = key => {
		return errors[key]
			? `outline outline-2 outline-offset-2 outline-red-600 `
			: '';
	};

	// -------------- Oy va kun ni olish -------------- //
	var hozir = new Date();
	var yil = hozir.getFullYear();
	var oy = hozir.getMonth() + 1;
	var kun = hozir.getDate();

	// -------------- Oy va kun uchun ikki raqamli formatni ta'minlash -------------- //
	oy = oy < 10 ? '0' + oy : oy;
	kun = kun < 10 ? '0' + kun : kun;

	// ------------- asboplarni iputini ichida malumot bolganini back endga yuborish ------------- //
	const handleInputChange = (value, item) => {
		setTool(prevTool => {
			const newTool = [...prevTool];
			const index = newTool.findIndex(toolItem => toolItem.id === item.id);

			if (value) {
				// Agar qiymat mavjud bo'lsa, yangilaymiz yoki qo'shamiz
				if (index !== null) {
					newTool[index].count = value;
				} else {
					newTool.push({ workToolId: +item.id, count: +value });
				}
			} else {
				// Agar qiymat bo'sh bo'lsa, count ni 0 ga o'zgartiramiz, lekin obyektni o'chirmaymiz
				if (index !== null) {
					newTool[index].count = 0;
				}
			}

			return newTool;
		});
	};

	// ------------- asboplarni iputini ichida malumot bolganini back endga yuborish ------------- //
	const todayPlanAdd = () => {
		toolId.splice(0, toolId.length); // toolId array'ini tozalaymiz

		for (let i = 0; i < tool.length; i++) {
			if (tool[i].count) {
				// parseInt yordamida count qiymatini number turiga o'zgartiramiz
				const countAsNumber = parseInt(tool[i].count, 10);
				if (!isNaN(countAsNumber)) {
					toolId.push({ ...tool[i], count: countAsNumber });
				}
			}
		}

		// ------------- input ichida qiymat toldirilganmi tekshirish ------------- //
		function todayPlanInfo(obj) {
			for (let key in obj) {
				if (
					obj[key] === undefined ||
					obj[key] === null ||
					obj[key] === false ||
					obj[key] === 'NaN' ||
					obj[key] === ''
				) {
					console.log(obj[key]);
					return false;
					// Agar inputlardan birortasi bulsa xam (undefined, null, false, 0, NaN, ''), false qaytariladi
				}
			}
			return true; // xammasi 100% tuldirilsa true qaytaradi
		}

		// ------------- tekshirilayoygan obgect ------------- //
		let requireObg = {
			todayPlan: byId('todayPlanID'),
			tomorrowPlan: byId('tomorrowPlan'),
			employeeCount: byId('employeeCount'),
			vacationCount: byId('vacationCount'),
			sickCount: byId('sickCount'),
			restCount: byId('restCount'),
			tripCount: byId('tripCount'),
			onTrainingCount: byId('onTrainingCount'),
		};

		// ------------- backendga jonatilayotgan object ------------- //
		let dataObj = {
			pkIds: pk,
			todayPlan: byId('todayPlanID'),
			tomorrowPlan: byId('tomorrowPlan'),
			date: `${yil}-${oy}-${kun}`,
			employeeCount: byId('employeeCount'),
			vacationCount: byId('vacationCount'),
			sickCount: byId('sickCount'),
			restCount: byId('restCount'),
			tripCount: byId('tripCount'),
			onTrainingCount: byId('onTrainingCount'),
			onHolidayCount: byId('protectionStackST'),
			// protectionStackPR: byId("protectionStackPR"),
			// relayConnectorsST: byId("relayConnectorsST"),
			// relayConnectorsPR: byId("relayConnectorsPR"),
			reqDayTools: toolId,
		};
		let result = todayPlanInfo(requireObg);

		// ------------- backendga malumot jonatish ------------- //
		if (result) {
			axios
				.post(
					`${api}day/plan`,
					{
						...dataObj,
						employeeCount: Number(dataObj.employeeCount),
						vacationCount: Number(dataObj.vacationCount),
						sickCount: Number(dataObj.sickCount),
						restCount: Number(dataObj.restCount),
						tripCount: Number(dataObj.tripCount),
						onTrainingCount: Number(dataObj.onTrainingCount),
					},
					config
				)
				.then(() => {
					toast.success('Hisobot muvaffaqiyatli saqlandi✔');
					onClose();
					setPkIdIn(true);
					getAdminStatistics();
				})
				.catch(() => {
					alert('Malumotlarni saqlashda xatolik yuz berdi❌');
				});
		}
	};

	// ------------- asboplarni iputini chaqirib olish ------------- //
	const getTool = () => {
		axios
			.get(`${api}work-tool/work-tool`, config)
			.then(res => {
				setTool(res.data);
			})
			.catch(err => {});
	};

	const data = [
		{
			label: 'Ertangi Ishlar rejasi',
			value: 'react',
			input: (
				<div className='relative h-32 w-full min-w-[200px]'>
					{/* <textarea
            required
            onChange={handleChange}
            value={inputs.tomorrowPlan}
            className={`${inputClass('tomorrowPlan')}peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 `}
            placeholder=" "
            id="tomorrowPlan"
          /> */}
					<Select
						id='tomorrowPlan'
						onChange={handleChange}
						label='Hisobot Kiriting'
					>
						{work && work.length !== 0 ? (
							work.map(item => <Option value={item?.id}>{item?.name}</Option>)
						) : (
							<Option disabled>Ma'lumot yo'q</Option>
						)}
					</Select>
					{/* <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
						Hisobot Kiriting
					</label> */}
				</div>
			),
			button: '',
		},
		{
			label: 'Bugungi Ishlar',
			value: 'html',
			input: (
				<div className='relative w-full min-w-[200px]'>
					<textarea
						required
						onChange={handleChange}
						value={inputs.todayPlanID}
						className={`${inputClass(
							'todayPlanID'
						)}peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 `}
						placeholder=' '
						id='todayPlanID'
					/>
					<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
						Hisobot Kiriting
					</label>
				</div>
			),
			button: '',
		},
		{
			label: 'Ish Qurollari',
			value: 'css',
			input: (
				<div className='relative w-full min-w-[200px] '>
					<table className='min-w-full divide-y divide-gray-200'>
						<thead className='bg-gray-50'>
							<tr>
								<th
									scope='col'
									className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
								>
									Nomi
								</th>

								<th
									scope='col'
									className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
								>
									Qiymati
								</th>
							</tr>
						</thead>
						<tbody className='bg-white divide-y divide-gray-200'>
							{tool &&
								tool.map((item, i) => (
									<tr key={i}>
										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='text-sm text-gray-900'>{item.name}</div>
										</td>

										<td className='px-6 py-4 whitespace-nowrap'>
											<div className='text-sm text-gray-900'>
												<Input
													className='elinp'
													value={
														tool.find(toolItem => toolItem.id === item.id)
															?.count || ''
													}
													onChange={e =>
														handleInputChange(e.target.value, item)
													}
													type='number'
													placeholder='Soni'
													id={item.id}
												/>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			),
			button: (
				<div>
					<Button
						onClick={() => {
							todayPlanAdd();
							handleSubmit();
						}}
						className='flex items-center ju'
					>
						Yuborish
					</Button>
				</div>
			),
		},
	];

	return (
		<div className='mt-5 mb-10 flex flex-col gap-10'>
			<div>
				<h3> Brigadaga ish qo'shish</h3>
				{/* for calendar */}
			</div>
			<div className='text-sm text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-3'>
				<Input
					required
					className={inputClass('employeeCount')}
					type='number'
					id='employeeCount'
					onChange={handleChange}
					value={inputs.employeeCount}
					label='Bugungi jami ishlayotganlar soni'
				/>
				<Input
					required
					className={inputClass('vacationCount')}
					type='number'
					id='vacationCount'
					onChange={handleChange}
					value={inputs.vacationCount}
					label='Dam oluvchilar soni(otgul)'
				/>
				<Input
					required
					className={inputClass('sickCount')}
					type='number'
					id='sickCount'
					onChange={handleChange}
					value={inputs.sickCount}
					label='Kasallar soni'
				/>
				<Input
					required
					className={inputClass('onTrainingCount')}
					type='number'
					id='onTrainingCount'
					onChange={handleChange}
					label='Ish haqi saqlanmagan holda (BS)'
				/>
				<Input
					required
					className={inputClass('tripCount')}
					type='number'
					id='tripCount'
					onChange={handleChange}
					label='Xizmat safarifda'
				/>
				<Input
					required
					className={inputClass('restCount')}
					type='number'
					id='restCount'
					onChange={handleChange}
					label="Malaka oshirishga (o'qishga) ketganlar soni"
				/>

				<Input type='text' id='protectionStackST' label="Mehnat ta'tili." />
				{/*<Input type="text" id="protectionStackPR" label="Rels ulagichlari PR." />
        <Input type="text" id="relayConnectorsST" label="Himoya stiklari ishchilari soni ST." />
        <Input type="text" id="relayConnectorsPR" label="Hiimoya stiklari ishchilari soni PR." /> */}
			</div>
			<Tabs id='custom-animation' value={selectedTab}>
				<TabsHeader>
					{data.map(({ label, value }) => (
						<Tab key={value} value={value}>
							{label}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
				>
					{data.map(({ value, input, button }) => (
						<TabPanel
							key={value}
							value={value}
							className='flex flex-col gap-2 '
						>
							{input}
							{button}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</div>
	);
}

export default TabsWithWork;
