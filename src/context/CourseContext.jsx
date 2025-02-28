import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const coursecontext = createContext();

// eslint-disable-next-line react/prop-types
export default function CourseContext({ children }) {
	const [GetID, setGetID] = useState(null);
	const [Courses, setCourses] = useState([]); // Initialize as an empty array instead of null
	const [isLoading, setIsLoading] = useState(false); // Add loading state
	const baseUrl = "http://147.93.85.227:8087/ems";

	// Fetch courses based on GetID
	async function getCourses() {
		if (!GetID) return; // Do not fetch if GetID is null or undefined
		setIsLoading(true); // Set loading state to true
		try {
			const response = await axios.get(`${baseUrl}/api/v1/courses/group/${GetID}`);
			setCourses(response.data); // Update courses state
		} catch (error) {
		} finally {
			setIsLoading(false); // Set loading state to false
		}
	}


	async function updateCourse(courseCode, values) {
		try {
			const response = await axios.put(`${baseUrl}/api/v1/courses/${courseCode}`, values);
			return response.data; // Return response if needed
		} catch (error) {
			console.error("Error updating course:", error);
			throw error; // Rethrow for better error handling
		}
	}

	async function deleteCourse(code) {
		return axios
			.delete(`${baseUrl}/api/v1/courses/${code}`)
			.then((res) => {
		
				return true;
			})
			.catch((error) => {
				return false;
				
			});
	}

	useEffect(() => {
		getCourses();
	}, [GetID]);

	return (
		<coursecontext.Provider
			value={{
				setGetID,
				Courses,
				isLoading,
				deleteCourse,
				updateCourse,
			}}>
			{children}
		</coursecontext.Provider>
	);
}
