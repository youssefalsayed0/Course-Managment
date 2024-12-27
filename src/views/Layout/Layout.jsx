import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../../Components/Sidenav/Sidenav";
import Navbar from "../../Components/Navbar/Navbar";

export default function Layout() {
	const [isActive, setIsActive] = useState(false);

	// Function to toggle classes
	const toggleClasses = () => {
		setIsActive((prev) => !prev);
	};

	
	return (
		<>
			<main >
				<Navbar toggleClasses={toggleClasses} isActive={isActive} />
				<Sidenav isActive={isActive}  toggleClasses={toggleClasses}/>
				<div className={isActive ? "default" : "main"}>
					<Outlet />
				</div>
			</main>
		</>
	);
}
