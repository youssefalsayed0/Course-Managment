import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./views/Layout/Layout";
import Courses from "./views/Courses/Courses";
import CourseForm from "./Components/CourseForm/CourseForm";
import CourseCard from "./Components/CourseCard/CourseCard";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Dashboard from "./views/Dashboard/Dashboard";
import GroupContext from "./context/GroupContext";
import CourseContext from "./context/CourseContext";
import { Toaster } from "react-hot-toast";
import Admins from "./views/Admins/Admins";
import AllAdmins from "./Components/AllAdmins/AllAdmins";
import AddAdmin from "./Components/AddAdmin/AddAdmin";
import Students from "./views/Students/Students";
import AllStudent from "./Components/AllStudent/AllStudent";
import AddStudent from "./Components/AddStudent/AddStudent";
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
			{
				path: "admins",
				element: <Admins />,
				children: [
					{
						path: "",
						element: <AllAdmins />,
					},
					{
						path: "add-admin",
						element: <AddAdmin />,
					},
				],
			},
			{
				path: "students",
				element: <Students />,
				children: [
					{
						path: "",
						element: <AllStudent />,
					},
					{
						path: "add-student",
						element: <AddStudent />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<>
		<Toaster/>
			<GroupContext>
				<CourseContext>
					<RouterProvider router={router} />
				</CourseContext>
			</GroupContext>
		</>
	);
}

export default App;
