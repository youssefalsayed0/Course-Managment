import { Link } from "react-router-dom";

export default function AllAdmins() {
	return (
		<section className="main-padding">
			<div className="container">
				<div className="row mb-5 align-items-end gy-4">
					<div className="col-md-3 col-lg-2 ms-auto text-end ">
						<Link to="add-admin" className="btn btn-dark rounded-pill text-white">
							Add Admin
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
