import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./views/Layout/Layout";
import Courses from "./views/Courses/Courses";
import CourseForm from "./Components/CourseForm/CourseForm";
import CourseCard from "./Components/CourseCard/CourseCard";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Dashboard from "./views/Dashboard/Dashboard";
import GroupContext from "./context/GroupContext";
// import CounterProvider from "./context/CounterProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "courses",
				element: <Courses />,
				children: [
					{
						path: "add",
						element: <CourseForm />,
					},
					{
						path: "",
						element: <CourseCard />,
					},
					{
						path: "course-details",
						element: <CourseDetails />,
					},
				],
			},
		],
	},
]);



function App() {
	return (
		<>
			<GroupContext>
				<RouterProvider router={router} />
			</GroupContext>
		</>
	);
}

export default App;
