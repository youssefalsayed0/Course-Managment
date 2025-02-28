import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { GroupContext } from "../../context/GroupContext";
import axios from "axios";
import toast from "react-hot-toast"; // Import react-hot-toast

export default function CourseForm() {
    const { groupsData } = useContext(GroupContext);
    const [avatarFile, setAvatarFile] = useState(null); // State to store the selected file

    // Validation Schema
    const validationSchema = Yup.object().shape({
        code: Yup.string()
            .required("Course Code is required")
            .min(5, "Course Code must be at least 5 characters")
            .max(10, "Course Code must be at most 10 characters"),
        name: Yup.string()
            .required("Course Name is required")
            .min(5, "Course Name must be at least 5 characters")
            .max(100, "Course Name must be at most 100 characters"),
        groupId: Yup.string().required("Please select a group"),
    });

    // Handle form submission
    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        try {
            // Create FormData object for multipart/form-data
            const formData = new FormData();
            formData.append("code", values.code); // Add code as query parameter
            formData.append("name", values.name); // Add name as query parameter
            formData.append("groupId", values.groupId); // Add groupId as query parameter
            if (avatarFile) {
                formData.append("avatar", avatarFile); // Add avatar file
            }
            // Send the payload to the API
            const response = await axios.post("http://147.93.85.227:8087/ems/api/v1/courses", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set content type for file upload
                },
            });
            // Show success toast
            toast.success("Course created successfully!");
            // Reset the form
            resetForm();
            setAvatarFile(null); // Clear the selected file
        } catch (error) {
            console.error("Error creating course:", error);
            // Show error toast
            toast.error("Failed to create course. Please try again.");
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
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <h1 className="mb-3 fw-semibold">Add Course</h1>

                                {/* Course Code */}
                                <div className="form-floating">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="code"
                                        name="code"
                                        placeholder="Course Code"
                                    />
                                    <label htmlFor="code">Course Code</label>
                                    <ErrorMessage name="code" component="div" className="text-danger mt-1" />
                                </div>

                                {/* Course Name */}
                                <div className="form-floating mt-4">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Course Name"
                                    />
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