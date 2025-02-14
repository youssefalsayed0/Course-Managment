import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { GroupContext } from "../../context/GroupContext";
import axios from "axios";

export default function CourseForm() {
    const { groupsData } = useContext(GroupContext);
    const [avatarFile, setAvatarFile] = useState(null); // State to store the selected file

    // Validation Schema
    const validationSchema = Yup.object().shape({
        code: Yup.string().required("Course Code is required"),
        name: Yup.string().required("Course Name is required"),
        groupId: Yup.string().required("Please select a group"),
        avatarType: Yup.string().optional(),
        active: Yup.boolean().required("Active status is required"),
    });

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            // Create a FormData object to handle file upload
            const formData = new FormData();
            formData.append("code", values.code);
            formData.append("name", values.name);
            formData.append("groupId", values.groupId);
            formData.append("avatarType", values.avatarType || "");
            formData.append("active", values.active);

            if (avatarFile) {
                formData.append("avatar", avatarFile); // Append the file to FormData
            }

            console.log("Submitting payload:", formData);

            // Send the payload to the API
            const response = await axios.post("http://147.93.85.227:8087/ems/api/v1/courses", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set content type for file upload
                },
            });

            console.log("API Response:", response.data);
            alert("Course created successfully!");
        } catch (error) {
            console.error("Error creating course:", error);
            alert("Failed to create course. Please try again.");
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file); // Update the state with the selected file
    };

    return (
        <section className="course-form main-padding">
            <div className="container">
                <div className="box m-auto" style={{ maxWidth: 500 }}>
                    <Formik
                        initialValues={{
                            code: "",
                            name: "",
                            groupId: "",
                            avatarType: "",
                            active: true,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <h1 className="mb-3 fw-semibold">Add Course</h1>

                                {/* Course Code */}
                                <div className="form-floating">
                                    <Field type="text" className="form-control" id="code" name="code" placeholder="Course Code" />
                                    <label htmlFor="code">Course Code</label>
                                    <ErrorMessage name="code" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Course Name */}
                                <div className="form-floating mt-4">
                                    <Field type="text" className="form-control" id="name" name="name" placeholder="Course Name" />
                                    <label htmlFor="name">Course Name</label>
                                    <ErrorMessage name="name" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Group Selection */}
                                <div className="mt-4">
                                    <Field as="select" className="form-select py-3" name="groupId">
                                        <option value="">Select a group</option>
                                        {groupsData?.map((group) => (
                                            <option key={group?.id} value={group?.id}>
                                                {group?.name}
                                            </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="groupId" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Avatar Upload */}
                                <div className="mt-4">
                                    <label htmlFor="avatar" className="form-label">
                                        Upload Avatar (Optional)
                                    </label>
                                    <input
                                        type="file"
                                        id="avatar"
                                        name="avatar"
                                        className="form-control"
                                        accept=".png,.jpg,.jpeg,.svg" // Restrict file types
                                        onChange={handleFileChange} // Handle file selection
                                    />
                                </div>

                                {/* Avatar Type (Optional) */}
                                <div className="mt-4">
                                    <Field as="select" className="form-select py-3" name="avatarType">
                                        <option value="">Select Avatar Type</option>
                                        <option value="png">PNG</option>
                                        <option value="jpg">JPG</option>
                                        <option value="jpeg">JPEG</option>
                                        <option value="svg">SVG</option>
                                    </Field>
                                    <ErrorMessage name="avatarType" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Active Status */}
                                <div className="mt-4">
                                    <label>
                                        <Field type="checkbox" name="active" className="me-2" />
                                        Active
                                    </label>
                                    <ErrorMessage name="active" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Submit Button */}
                                <button className="btn btn-dark w-100 py-2 mt-4" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}