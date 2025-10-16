import Image from "next/image";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import Boat from "./components/Boat";
import Projects from "./components/Projects";
import { SiLinkedin } from "react-icons/si";
import { SiGithub, IconType } from "@icons-pack/react-simple-icons";
import { IconType as IT } from "react-icons";

const RenderIcon = ({ Icon, size = 16, className = '' }: { Icon: IconType|IT; size?: number|string; className?: string }) => (
	<div className={`inline-block ${className}`}>
		<Icon size={size} color='default' />
	</div>
)

export default function Home() {
	return (
    <div className="font-sans flex flex-col justify-items-center min-h-screen bg-white dark:bg-[#1d1d23]">
			<header>
				<Navbar />
			</header>
			
			<section 
				id="home"
				className="w-full items-center flex-col flex min-h-screen"
			>
				{/* Main dash text */}
				<main
					className="mt-[15vh] flex flex-col text-center sm:text-left"
				>
					<h1
						className="text-6xl lg:text-[5vw]"
					>
						Hello, I&#39;m
						<span className="font-extrabold text-[#05dbfc]"> Noah</span>.
					</h1>

					<h3
						className="text-xl lg:text-[1.8vw]"
					>
						a software developer and cybersecurity enthusiast.
					</h3>
				</main>

				{/* Main buttons */}
				<div
					className="flex gap-4 sm:gap-[1vw] items-center flex-col sm:flex-row pt-[4vw]"
				>
					<a href="#projects"
						className="sm:text-nowrap md:text-[1.2vw] sm:py-[1vw] sm:h-fit sm:px-[3vh] cursor-pointer rounded-full mt-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ddff56] dark:hover:bg-[#282830] hover:border-transparent font-medium text-sm h-10 px-4 w-full sm:w-fit"
					>
						Jump to projects
					</a>

					<a href="#contact"
						className="sm:text-nowrap md:text-[1.2vw] sm:py-[1vw] sm:h-fit sm:px-[3vh] cursor-pointer rounded-full mt-2 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#00ddff56] dark:hover:bg-[#282830] hover:border-transparent font-medium text-sm h-10 px-4 w-full sm:w-fit"
					>
						Contact me
					</a>
				</div>

				{/* Background images */}
				<div
					className="min-h-[65vh] relative w-full flex-1"
				>
					{/* <Image 
						src="/background.svg"
						alt="Background SVG of wave."
						fill
						priority
						draggable="false"
						className="w-full transform -scale-x-100 selectDisable"
					/> */}

					<svg
					  viewBox="0 0 168.91383 149.08253"
					  preserveAspectRatio="none"
					  className="absolute  top-0 left-0 w-full h-full transform -scale-x-100 inset-0 selectDisable object-cover"
						xmlns="http://www.w3.org/2000/svg"
					>
					  <path
							id="wave-path"
					    d="M168.9138 0C42.2285 74.5413 84.4569 111.8119 0 149.0825H168.9138Z"
					    fill="#03c5e3ff"
					  />
					</svg>

					<Boat pathID="wave-path"/>

				</div>
			</section>
			

			<section 
				id="projects"
				className="w-full h-fit min-h-screen flex"
			>
				{/* Background image */}
				<div
					className="w-full flex flex-col min-h-screen absolute z-1"
				>
					<Image 
						src="/background.svg"
						alt="Background SVG of upside down wave."
						fill
						priority
						draggable="false"
						className="selectDisable transform -scale-y-100 w-full"
					/>

				</div>
				<Projects />
				

			</section>

			<section 
				id="contact"
				className="w-full flex flex-col min-h-screen relative justify-center items-center"
			>
				{/* Background SVGs */}
				<div
					className="w-full inset-0 flex flex-col absolute sm:h-screen z-1 overflow-hidden"
				>	
				<Image 
						src='/ark-landing.png'
						alt="Ark running from waves."
						height={6329}
						width={3731}
						style={{width:'15vw'}}
						className="selectDisable absolute right-[15vw] top-[2vw]"
					/>

					<Image 
						src="/wave.svg"
						alt="Wave separator"
						width={1600}
						height={200}
						style={{width:'100%'}}
						priority
						draggable="false"
						className="selectDisable transform -scale-x-100"
					/>

					<div
						className="-mt-[0.2vh] h-screen w-full relative"
					>
						<Image 
							src='background.svg'
							alt="wave background"
							// width={169}
							// height={149}
							fill
							priority
							draggable="false"
							// style={{width:'100%', height:'1oo%'}}
							className="selectDisable transform -scale-y-100 -scale-x-100"
						/>
					</div>
				</div>

				<Contact />

			</section>

      <footer className="flex-wrap items-center justify-center overflow-hidden text-center z-10 pb-[5vh]">
        <p className="text-xs" >Copyright © 2025 Noah Van Fleet</p>
      
				<div
					className='flex flex-row my-[1vw] gap-[2vh] items-center justify-center'
				>
					<a
						href="https://github.com/noahvanfleet"
						referrerPolicy="no-referrer"
						target="_blank"
					>
							<RenderIcon Icon={SiGithub} className="dark:invert" size={'4vh'}/>
					</a>

					<a
						href="https://linkedin.com/in/noahvanfleet"
						referrerPolicy="no-referrer"
						target="_blank"
					>	
						<RenderIcon size={'4vh'} className="" Icon={SiLinkedin}  />
					</a>
				</div>
			</footer>
    </div>
  );
}
