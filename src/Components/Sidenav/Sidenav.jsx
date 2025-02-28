import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Sidenav({ isActive ,toggleClasses }) {
	return (
		<div className={`side-nav h-100 text-white  ${isActive ? "slide" : ""}`}>

          <i className="bi bi-x-circle-fill position-absolute close" onClick={toggleClasses}></i>

			<div className="text-center py-4 border-bottom border-1">
				<h5>Examination Management System</h5>
			</div>
			<ul className="p-0 m-0">
				<li className="border-bottom border-1">
					<i className="bi bi-box fs-5 me-2" />
					<Link to="">Dashboard</Link>
				</li>
				<li className="border-bottom border-1">
					<i className="bi bi-person fs-5 me-2" />
					<Link to="/admins">Admins</Link>
				</li>
				<li className="border-bottom border-1">
					<i className="bi bi-person-raised-hand fs-5 me-2" />
					<Link to="/students">Students</Link>
				</li>
				<li className="border-bottom border-1">
					<i className="bi bi-journal fs-5 me-2" />
					<Link to="/courses">Courses</Link>
				</li>
				<li className="border-bottom border-1">
					<i className="bi bi-clipboard-minus fs-5 me-2" />
					<Link to="">Exams</Link>
				</li>
				<li>
					<i className="bi bi-check2-square fs-5 me-2" />
					<Link to="">Roles</Link>
				</li>
			</ul>
		</div>
	);
}

