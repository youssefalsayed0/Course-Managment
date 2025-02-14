import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const coursecontext = createContext();

export default function CourseContext({ children }) {

	const [GetID, setGetID] = useState(null);
	const [Courses, setGetCourses] = useState(null);

	const baseUrl = "http://147.93.85.227:8087/ems";

	async function getCourses() {
		try {
			const response = await axios.get(`${baseUrl}/api/v1/courses/group/${GetID}`);
			setGetCourses(response.data);
		} catch (error) {
			console.error("Error fetching groups:", error);
		}
	}

	useEffect(() => {

		getCourses();

	}, []);

	return (
		<>
			<coursecontext.Provider
				value={{
					setGetID,
					Courses,
				}}>
				{children}
			</coursecontext.Provider>
		</>
	);
}
