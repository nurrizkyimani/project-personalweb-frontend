import Nav from '../components/nav';

import { useState, useEffect } from 'react';
import axios from 'axios';
import useMediaLink from '../hooks/useMediaLink';
import useNavbarLink from '../hooks/navbar-hooks';
import useMenuLink from '../hooks/menu-hooks';
import Playlist from '../components/playlist';
import CloseButton from '../components/closeButton';
import Head from 'next/head';





export default function IndexPage() {
	const [ projects, setProjects ] = useState([]);
	const [ experiences, setExperiences ] = useState([]);
	const [ stacks, setStacks ] = useState([]);
	const [ isToggled, setToggled ] = useState(false);
	const [ stackInfo, setStackInfo ] = useState({});
	const [ aboutInfo, setAboutInfo ] = useState({});
	const [ heroInfo, setHeroInfo ] = useState({});
	const mediaLink = useMediaLink();
	const navbarLink = useNavbarLink();
	const menuLink = useMenuLink();

	useEffect(() => {

		const fetching = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/projects`);
				setProjects(res.data);
				console.log('setproject done');
			} catch (error) {
				console.log(error);
			}
		};

		const fetchingexp = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/experiences`);
				setExperiences(res.data);
				console.log('setproject done');
			} catch (error) {
				console.log(error);
			}
		};
		fetching();
		fetchingexp();

		const fetchingstack = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/stacks?_sort=id:ASC`);
				setStacks(res.data);
				console.log('setstack done');
			} catch (error) {
				console.log(error);
			}
		};

		fetchingstack();

		const fetchinginfo = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/info-stack`);
				setStackInfo(res.data);
				console.log('setinfo done');
			} catch (error) {
				console.log(error);
			}
		};

		fetchinginfo();

		const fechingAbout = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/about`);
				setAboutInfo(res.data);
				console.log('setAbout done');
			} catch (error) {
				console.log(error);
			}
		};

		fechingAbout();

		const fetchingHero = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/hero`);
				setHeroInfo(res.data);
				console.log('set hero done');
			} catch (error) {
				console.log(error);
			}
		};

		fetchingHero();
	}, []);

	const toggleTrueFalse = () => setToggled(!isToggled);

	let indigo


	return (
		<div>
			<Head>
				<link
					rel="icon"
					href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/male-technologist_1f468-200d-1f4bb.png"
				/>
				<title>Nurrizky Imani</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex flex-col h-screen relative bg-gray-100">
				<Nav addClass="bg-blue-100" toggleTFProp={() => toggleTrueFalse()} />

				<div className="flex-1 md:flex md:overflow-y-hidden h-screen ">
					{/* sidebar */}
					<div
						className={`
						sidebar md:w-48 mb-5 md:mb-0 flex-none md:flex 
						flex-col divide-y px-4 pl-5  md:mt-5 
						min-h-screen md:min-h-0 fixed z-20
						md:static md:z-0 md:bg-gray-0 bg-gray-100
						w-screen top-0
						ease-linear
						${isToggled ? '' : 'hidden'}`}
					>
						<div
							className={`sidebar-top text-3xl md:text-base space-y-5 md:space-y-0 object-center py-10 md:py-0 `}
						>
							<p className="self-center text-4xl font-serif flex justify-between no-underline text-center transform hover:-translate-y-1 duration-300  md:hidden
									">
								"👨‍💻 👨‍🚀 👨‍🎓"
							</p>

							{menuLink.map((menu) => (
								<div className="icon-work flex py-2  hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2  ">
									<p className="md:text-xl mr-1">{menu.icon}</p>
									<a href={menu.link} className="ml-3 ">
										{' '}
										{menu.info}
									</a>
								</div>
							))}

							<ul className="flex justify-between items-center mr-3 md:hidden">
								{navbarLink.map((link) => (
									<li>
										<a
											href=""
											className="inline-block text-sm px-2 py-2 hover:shadow-inner transform pl-1 leading-snug rounded-md text-gray-900  
											transition duration-300 ease-in-out  hover:bg-gray-300  lg:mt-0"
										>
											<div className="flex">
												{link.href1}
												<p className="text-base"> {link.label}</p>
											</div>
										</a>
									</li>
								))}
							</ul>

							<CloseButton
								toggleTrueFalse={() => {
									toggleTrueFalse();
								}}
							/>
						</div>

						<Playlist />
					</div>

					<div className="main w-full lg:px-5 overflow-y-auto  bg-gray-100 ">
						<div className="container mx-auto px-6 md:px-12 flex flex-col-reverse sm:flex-row items-center  mb-5  min-h-full ">
							<div className="sm:w-4/5 flex flex-col items-start sm:mt-0">
								<h1 className="text-4xl lg:text-6xl leading-none mb-4">
									<strong className="font-black">{heroInfo.strong}</strong>
								</h1>
								<p className="text-lg mb-2">{heroInfo.p1}</p>

								<p className="text-lg mb-5 md:mb-12">{heroInfo.p2}</p>
								<p class="font-semibold text-lg bg-blue-500 hover:bg-blue-400 transition duration-300 ease-in-out  text-white py-3 px-10 rounded-full hover:shadow-inner transform">
									Lets Go
								</p>
							</div>
						</div>
					
					

						<div id="experience">
							<h1 className=" border-b  border-blue-600 mb-5 md:mb-0 text-4xl sticky px-5 md:px-0">
								Experience 🧳
							</h1>

							<div className="work-exp md:px-8 md:py-1">
								<div>
									<div className="relative  m-8">
										<div className="border-r-2 border-gray-800 border-dotted absolute h-full z-0 pl-2 mt-2" />
										<ul className="list-none m-0 p-0">
											{experiences.map((exp) => (
												<li key={exp.id} className="mb-4">
													<div className="flex mb-1 align-top content-start">
														<div className="flex">
															<img
																className="w-12 h-12 object-none -ml-4 z-10"
																src="https://picsum.photos/200/300?random=1"
																alt="Sunset in the mountains"
															/>
															<div className="flex flex-col">
																<div className="ml-4 font-medium">{exp.title}</div>
																<p className=" ml-4 text-sm ">{exp.company}</p>
															</div>
														</div>

														<div className="flex z-auto flex-col flex-1 items-end relative md:pr-5 text-right">
															<p className="text-sm">{exp.location}</p>
															<p className="text-sm">{exp.time_range}</p>
														</div>
													</div>
													<div className="ml-12 ">
														<div className="flex flex-col" />
														<ul className="list-disc space-y-2 pl-5 overflow-x-hidden">
															{exp.job_desc.map((job) => {
																if (job.each_jobdesc != null) {
																	return <li key={job.id}>{job.each_jobdesc}</li>;
																}
															})}
														</ul>

														<div class="align-start pt-4">
															{exp.tech_stack.map((stack) => {
																if (stack.each_stack != null) {
																	return (
																		<span
																			key={stack.id}
																			class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
																		>
																			{stack.each_stack}
																		</span>
																	);
																}
															})}
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div id="project">
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky px-5 md:px-0 ">
								Projects 📂
							</h1>

							<div className="project-cards-list flex w-full justify-between flex-wrap py-10 px-10 md:px-4">
								{projects.map((project) => (
									<a
										href={project.url_link}
										key={project.id}
										className={`
										card 
										flex
										flex-col
										justify-between
										max-w-almost-sm
										flex-grow mb-8 
										mr-2 border-gray-500  
										shadow-lg overflow-hidden rounded-md 
										transform hover:scale-105 duration-300 hover:shadow-xl
										`}
									>
										<div>
											<img
												className="w-full h-48 object-cover border-b"
												src={`${process.env.API_URL}${project.photo[0].url}`}
												alt="Sunset in the mountains"
											/>
											<dir className="px-5 py-2 ">
												<div className="flex flex-col justify-between w-full min-h-full">
													<h1 className="text-2xl">{project.title}</h1>
													<ul className="space-y-4 text-sm pt-4 list-disc px-5">
														{project.each_explanation.map((expla) => (
															<li key={expla.id}>{expla.each_explanation}</li>
														))}
													</ul>
												</div>
											</dir>
										</div>

										<div class="align-start pt-4 items-end px-5 pb-5">
											{project.tags_project.map((tag) => {
												if (tag.each_tag != null) {
													return (
														<span
															key={tag.id}
															class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
														>
															{tag.each_tag}
														</span>
													);
												}
											})}
										</div>
									</a>
								))}
							</div>
						</div>



						<div id="target">
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky px-5 md:px-0 ">Stack 🛠</h1>
							<div className="px-5 md:px-0">
								<p key={stackInfo.id} className="md:pb-5">
									{stackInfo.info}
								</p>

								<div className="flex flex-col md:flex-row md:space-x-5 pt-4 py-20 space-y-3 md:space-y-0">
									{stacks.map((stack) => (
										<div key={stack.id} className="md:w-1/3">
											<h5 className="text-xl pb-2">{stack.title}</h5>
											<div className="pl-4 ">
												<ul className=" flex flex-wrap ">
													{stack.perlevel_stack &&
														stack.perlevel_stack.map((each) => {
															if (each.each_stack != null) {
																return (
																	<li key={each.id} className="w-1/2 mb-3">
																		{each.each_stack}
																	</li>
																);
															}
														})}
												</ul>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						


				
						<div className="min-h-full" id="section1">
							<h1 className=" border-b  border-blue-600 mb-5 text-4xl sticky font-bold  px-5 md:px-0">
								About 👨‍🚀
							</h1>

							<div className="flex flex-col lg:flex-row px-5 md:px-0">
								<div className=" lg:w-1/2 border-gray-500 pr-5">
									<h5 className="text-lg text-gray-600 font-thin -mb-1"> Nice to meet you </h5>
									<h1 className="text-4xl font-bold tracking-wide"> {aboutInfo.h1_title}</h1>
									<h2 className="text-2xl font-normal tracking-wide pt-2  ">
										{aboutInfo.h2_sub_title}
									</h2>
									{aboutInfo.p_tag &&
										aboutInfo.p_tag.map((p_tag) => (
											<p
												key={p_tag.id}
												className="text-lg font-light tracking-normal pt-8 text-left"
											>
												{p_tag.each_ptag}
											</p>
										))}
								</div>

								<div className=" border-gray-500 flex lg:items-center flex-col ">
									<div className="card rounded-md  md:px-6 py-8  md:w-5/12 flex flex-col  space-y-3">
										<div className="relative  w-3/12 md:w-9/12 transform hover:scale-110 duration-300 ">
											<img
												className="rounded-full hover:shadow-xl transform ease-in-out duration-300 "
												src="https://avatars3.githubusercontent.com/u/25843889?s=460&u=0665df9620e6db3156619b8414fdd6b047f32286&v=4"
												alt="Sunset in the mountains"
											/>

											<div className="bg-green-online p-3 md:p-4 rounded-full absolute right-0 bottom-0 " />
										</div>

										<div>
											<h3 className="page-h3">Stay up-to-date</h3>
											<p className=" text-sm mt-2">
												<strong>Hint:</strong>{' '}
												<span class=" opacity-50">Active on Instagram and Twitter.</span>
											</p>
											<ul className="social-link space-y-2 mt-6 ">
												{mediaLink.map((each) => (
													<li className="social-link  ">
														<a
															className="flex text-sm py-2 pr-2 hover:shadow-inner transition duration-300 ease-in-out hover:bg-gray-300 rounded-md p-2 -ml-2"
															href={each.link}
														>
															<div className="mr-2">{each.svg}</div>

															<p>{each.label}</p>
														</a>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
