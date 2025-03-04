export default function AddStudent() {
	return (
		<section className="main-padding">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
						<div className="card border border-light-subtle rounded-4">
							<div className="card-body p-3 p-md-4 p-xl-5">
								<div className="row">
									<div className="col-12">
										<div className="mb-5">
											<h2 className="h4 text-center">Add Student</h2>
											<h3 className="fs-6 fw-normal text-secondary text-center m-0">Enter your details to add new student</h3>
										</div>
									</div>
								</div>
								<form action="#!">
									<div className="row gy-3 overflow-hidden">
										<div className="col-12">
											<div className="form-floating mb-3">
												<input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" required />
												<label htmlFor="firstName" className="form-label">
													First Name
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" required />
												<label htmlFor="lastName" className="form-label">
													Last Name
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" required />
												<label htmlFor="email" className="form-label">
													Enter your email
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" required />
												<label htmlFor="password" className="form-label">
													Enter your password
												</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating mb-3">
												<input type="text" className="form-control" name="universityId" id="universityId" placeholder="University ID" required />
												<label htmlFor="universityId" className="form-label">
													University ID
												</label>
											</div>
										</div>
										<div className="col-12">
											{/* Group Selection */}
											<div className="mb-3">
												<select className="form-select py-3" name="groupId">
													<option value="">Select a group</option>
													<option>group</option>
												</select>
											</div>
										</div>
										<div className="col-12">
											<div className="d-grid">
												<button className="btn  btn-dark" type="submit">
													Add
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
