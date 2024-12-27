import { Link } from "react-router-dom";
import imgage from "../../assets/images/istockphoto-1500285927-612x612.jpg";
export default function CourseCard() {
  return (
    <>
      <section className="main-padding course-card ">
        <div className="container">

          <div className="row mb-5   align-items-end gy-4">
              <div className="col-md-3  col-lg-2">
                <label htmlFor="yearFilter" className="form-label">Filter by Year:</label>
                <select className="form-select" id="yearFilter">
                  <option value>All Years</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                </select>
              </div>
              <div className="col-md-3 col-lg-2">
                <label htmlFor="groupFilter" className="form-label">Filter by Group:</label>
                <select className="form-select" id="groupFilter">
                  <option value>All Groups</option>
                  <option value="A">Group A</option>
                  <option value="B">Group B</option>
                  <option value="C">Group C</option>
                </select>
              </div>
              <div className="col-md-3 col-lg-2 ms-auto">
            <Link className="btn btn-dark rounded-pill text-white">Add Course</Link>
          </div>
          

        

          </div>


          <div className="row gy-4">

            <div className=" col-sm-6 col-md-4 shadow p-3">
              <Link to="course-details" className="image">
                <img src={imgage} alt="course" className="img-fluid" />
              </Link>
              <h3 className="m-0 mt-2"><Link to="course-details">Course Title</Link></h3>
              <p className="mb-2">Course Group</p>
              <p className="text-secondary fs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.</p>
              <div className="events-icons">
              <i className="bi bi-trash me-3 fs-4"></i>
              <i className="bi bi-pencil-square me-2 fs-4"></i>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 shadow p-3">
              <Link to="course-details" className="image">
                <img src={imgage} alt="course" className="img-fluid" />
              </Link>
              <h3 className="m-0 mt-2"><Link to="course-details">Course Title</Link></h3>
              <p className="mb-2">Course Group</p>
              <p className="text-secondary fs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.</p>
              <div className="events-icons">
              <i className="bi bi-trash me-3 fs-4"></i>
              <i className="bi bi-pencil-square me-2 fs-4"></i>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 shadow p-3">
              <Link to="course-details" className="image">
                <img src={imgage} alt="course" className="img-fluid" />
              </Link>
              <h3 className="m-0 mt-2"><Link to="course-details">Course Title</Link></h3>
              <p className="mb-2">Course Group</p>
              <p className="text-secondary fs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.</p>
              <div className="events-icons">
              <i className="bi bi-trash me-3 fs-4"></i>
              <i className="bi bi-pencil-square me-2 fs-4"></i>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 shadow p-3">
              <Link to="course-details" className="image">
                <img src={imgage} alt="course" className="img-fluid" />
              </Link>
              <h3 className="m-0 mt-2"><Link to="course-details">Course Title</Link></h3>
              <p className="mb-2">Course Group</p>
              <p className="text-secondary fs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.</p>
              <div className="events-icons">
              <i className="bi bi-trash me-3 fs-4"></i>
              <i className="bi bi-pencil-square me-2 fs-4"></i>
              </div>
            </div>
            <div className=" col-sm-6 col-md-4 shadow p-3">
              <Link to="course-details" className="image">
                <img src={imgage} alt="course" className="img-fluid" />
              </Link>
              <h3 className="m-0 mt-2"><Link to="course-details">Course Title</Link></h3>
              <p className="mb-2">Course Group</p>
              <p className="text-secondary fs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.</p>
              <div className="events-icons">
              <i className="bi bi-trash me-3 fs-4"></i>
              <i className="bi bi-pencil-square me-2 fs-4"></i>
              </div>
            </div>

     


          </div>
          
        </div>
      </section>
    </>
  );
}
