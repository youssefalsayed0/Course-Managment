import { Link } from "react-router-dom";

export default function CourseDetails() {
	return (
		<>
			<section className="main-padding CourseDetails">
				<div className="container">
					<nav aria-label="breadcrumb">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<Link to="/courses">Courses</Link>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Course Name
							</li>
						</ol>
					</nav>

					<div className="row justify-content-center mt-3">
						{/* Course 1 */}
						<div className="col-md-4-6  mb-3">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Mathematics 101</h5>
									<p className="card-text">
										<strong>Code:</strong> MATH101
										<br />
										<strong>Group:</strong> A<br />
										<strong>Admins:</strong> Dr. John Doe, Prof. Jane Smith
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-5 gy-4">
						<h3 className="mb-4">Categorized Attachment</h3>

						<div className="col-lg-4 col-md-6">
							<div className="box bg-dark-subtle p-4 rounded-4">
								<h6 className="mb-3">Lectures</h6>

								<div className="row bg-white p-2  rounded-4">
									<div className="col-md-6">
										<p className="m-0">week 1 introduction </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<div className="row bg-white p-2  rounded-4 mt-3">
									<div className="col-md-6">
										<p className="m-0">week 2 Deep Dive </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<button type="button" className="btn btn-dark position-relative w-100 mx-0 mt-3 rounded-4">
									<input
										type="file"
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											opacity: 0,
											cursor: "pointer",
										}}
									/>
									Upload File
								</button>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="box bg-dark-subtle p-4 rounded-4">
								<h6 className="mb-3">Lectures</h6>

								<div className="row bg-white p-2  rounded-4">
									<div className="col-md-6">
										<p className="m-0">week 1 introduction </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<div className="row bg-white p-2  rounded-4 mt-3">
									<div className="col-md-6">
										<p className="m-0">week 2 Deep Dive </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<button type="button" className="btn btn-dark position-relative w-100 mx-0 mt-3 rounded-4">
									<input
										type="file"
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											opacity: 0,
											cursor: "pointer",
										}}
									/>
									Upload File
								</button>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="box bg-dark-subtle p-4 rounded-4">
								<h6 className="mb-3">Lectures</h6>

								<div className="row bg-white p-2  rounded-4">
									<div className="col-md-6">
										<p className="m-0">week 1 introduction </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<div className="row bg-white p-2  rounded-4 mt-3">
									<div className="col-md-6">
										<p className="m-0">week 2 Deep Dive </p>
									</div>

									<div className="data-icons col-md-6 text-md-end">
										<i className="bi bi-eye me-2"></i>

										<i className="bi bi-pencil-square me-2"></i>
										<i className="bi bi-trash me-2"></i>
									</div>
								</div>

								<button type="button" className="btn btn-dark position-relative w-100 mx-0 mt-3 rounded-4">
									<input
										type="file"
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											opacity: 0,
											cursor: "pointer",
										}}
									/>
									Upload File
								</button>
							</div>
						</div>



					</div>
				</div>
			</section>
		</>
	);
}
