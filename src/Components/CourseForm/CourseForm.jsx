export default function CourseForm() {
  return (
    <>
      <section className="course-form main-padding">
        <div className="container">
          <div className="box  m-auto" style={{ maxWidth: 500 }}>
            <form>

           
              <h1 className=" mb-3 fw-semibold">Add Course</h1>

              <div className="form-floating">
                <input type="text" className="form-control" id="courseName" placeholder="Course Name" />
                <label htmlFor="courseName">Course Name</label>
              </div>

              <div className="form-floating mt-4">
                <input type="text" className="form-control" id="courseGroup" placeholder="Course Group" />
                <label htmlFor="courseGroup">Course Group</label>
              </div>

              <div className=" mt-4 ">
                <select className="form-select py-3" id="inputGroupSelect01">
                  <option selected>Select Group</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>

              <div className=" mt-4">
                <select className="form-select py-3" id="inputGroupSelect01">
                  <option selected>Add Teacher</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>


              <button className="btn btn-dark w-100 py-2 mt-4" type="submit">Submit</button>

            </form>

          </div>
        </div>
      </section>
    </>
  );
}
