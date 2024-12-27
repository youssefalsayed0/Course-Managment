import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({ toggleClasses , isActive }) {
	return (
		<header className={`bg-body-secondary sticky-top ${isActive ? "default" : ""}`}>
			<div className="container-fluid">
				<div className="d-flex justify-content-between pe-4 py-3">
					<button
						className="border-0 bg-transparent"
						onClick={toggleClasses}
					>
						<i className="bi bi-list fs-4"></i>
					</button>
					<div>
						<Link to="/" className="me-4">
							<i className="bi bi-house-fill fs-4 me-2"></i>Home
						</Link>
						<Link to="account">
							<i className="bi bi-person-circle fs-4"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
