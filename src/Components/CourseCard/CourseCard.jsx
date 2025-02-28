import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GroupContext } from "../../context/GroupContext";
import { coursecontext } from "../../context/CourseContext";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function CourseCard() {
    const { groupsData } = useContext(GroupContext);
    const { setGetID, Courses, deleteCourse, updateCourse } = useContext(coursecontext);
    const [selectedGroupId, setSelectedGroupId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [avatarFile, setAvatarFile] = useState("");

    const handleGroupFilterChange = (event) => {
        setSelectedGroupId(event.target.value);
        setGetID(event.target.value);
    };

    const filteredCourses = selectedGroupId ? Courses?.filter(course => course?.groupId === selectedGroupId) : Courses;

    async function deleteItem(code) {
        await toast.promise(
            (async () => {
                let response = await deleteCourse(code);
                if (response) return "Item deleted successfully!";
                throw new Error("Failed to delete the item.");
            })(),
            {
                loading: "Deleting ...",
                success: (msg) => msg,
                error: (error) => error.message,
            }
        );
    }

    const handleEditClick = (course) => {
        setSelectedCourse(course);
        setAvatarFile(course?.avatar || ""); // Set existing avatar
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
        setAvatarFile("");
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarFile(reader.result); // Convert image to Base64
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateCourse = async (values) => {
        try {
            const updatedData = {
                code: values.code,
                name: values.name,
                groupId: values.groupId,
                avatar: avatarFile, // Base64 image
            };
            console.log(updatedData);
            await updateCourse(selectedCourse.code, updatedData);
            toast.success("Course updated successfully!");
            handleCloseModal();
        } catch (error) {
            console.error("Error updating course:", error);
            toast.error("Failed to update course. Please try again.");
        }
    };

    const updateCourseSchema = Yup.object().shape({
        code: Yup.string().required("Course Code is required"),
        name: Yup.string().required("Course Name is required").min(5, "Course Name must be at least 5 characters").max(100, "Course Name must be at most 100 characters"),
        groupId: Yup.string().required("Please select a group"),
    });

    return (
        <>
            <section className="main-padding course-card">
                <div className="container">
                    <div className="row mb-5 align-items-end gy-4">
                        <div className="col-md-3 col-lg-2">
                            <label htmlFor="groupFilter" className="form-label">Filter by Group:</label>
                            <select className="form-select" id="groupFilter" value={selectedGroupId} onChange={handleGroupFilterChange}>
                                <option value="">Select a group</option>
                                {groupsData?.map(group => (
                                    <option key={group?.id} value={group?.id}>{group?.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3 col-lg-2 ms-auto">
                            <Link to="add" className="btn btn-dark rounded-pill text-white">Add Course</Link>
                        </div>
                    </div>

                    <div className="row gy-4">
                        {filteredCourses?.map(course => (
                            <div key={course?.code} className="col-sm-6 col-lg-4 shadow p-3">
                                <Link to={`course-details/${course?.id}`} className="image">
                                    <img src={course?.avatar} alt="course" className="img-fluid" />
                                </Link>
                                <h5 className="m-0 mt-2">
                                    <Link to={`course-details/${course?.id}`}>{course?.name}</Link>
                                </h5>
                                <p className="mb-2">{groupsData?.find(group => group?.id === course?.groupId)?.name || "Unknown Group"}</p>
                                <div className="events-icons">
                                    <i className="bi bi-trash me-3 fs-4" onClick={() => deleteItem(course?.code)}></i>
                                    <i className="bi bi-pencil-square me-2 fs-4" onClick={() => handleEditClick(course)}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Course</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <Formik
                                    initialValues={{
                                        code: selectedCourse?.code || "",
                                        name: selectedCourse?.name || "",
                                        groupId: selectedCourse?.groupId || "",
                                    }}
                                    validationSchema={updateCourseSchema}
                                    onSubmit={handleUpdateCourse}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-floating mb-3">
                                                <Field type="text" className="form-control" id="code" name="code" placeholder="Course Code" />
                                                <label htmlFor="code">Course Code</label>
                                                <ErrorMessage name="code" component="div" className="text-danger mt-1" />
                                            </div>

                                            <div className="form-floating mb-3">
                                                <Field type="text" className="form-control" id="name" name="name" placeholder="Course Name" />
                                                <label htmlFor="name">Course Name</label>
                                                <ErrorMessage name="name" component="div" className="text-danger mt-1" />
                                            </div>

                                            <div className="mb-3">
                                                <Field as="select" className="form-select py-3" name="groupId">
                                                    <option value="">Select a group</option>
                                                    {groupsData?.map(group => (
                                                        <option key={group?.id} value={group?.id}>{group?.name}</option>
                                                    ))}
                                                </Field>
                                                <ErrorMessage name="groupId" component="div" className="text-danger mt-1" />
                                            </div>

                                            <div className="mb-3">
                                                <input type="file" id="avatar" name="avatar" className="form-control" onChange={handleFileChange} />
                                                {avatarFile && <img src={avatarFile} alt="Preview" className="img-thumbnail mt-2" style={{ maxWidth: "100px" }} />}
                                            </div>

                                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Updating..." : "Update"}</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
