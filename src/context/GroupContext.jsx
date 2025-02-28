import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GroupContext = createContext();

// eslint-disable-next-line react/prop-types
export default function GroupContextProvider({ children }) {
	const [groupsData, setGroupsData] = useState(null);


	const baseUrl = "http://147.93.85.227:8087/ems";
	const userId = "group";

	async function getGroups() {
		try {
			const response = await axios.get(`${baseUrl}/api/v1/groups/user/${userId}`);
			setGroupsData(response.data);
		} catch (error) {
			console.error("Error fetching groups:", error);
		}
	}


	useEffect(() => {
		getGroups();
	}, []);

	return (
		<GroupContext.Provider
			value={{
				groupsData,
			}}>
			{children}
		</GroupContext.Provider>
	);
}
