import { Link } from "react-router-dom";

export default function AllStudent() {
	return (
		<section className="main-padding">
			<div className="container">
				<div className="row mb-5 align-items-end gy-4">
					<div className="col-md-3 col-lg-2 ms-auto text-end ">
						<Link to="add-student" className="btn btn-dark rounded-pill text-white">
							Add Student
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
