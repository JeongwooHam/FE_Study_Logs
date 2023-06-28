import { createContext, useContext, useState } from "react";

export const useLanguage = () => useContext(LanguageStore);

const LanguageStore = createContext();

const LanguageStoreProvider = ({ children }) => {
	const [selectedLanguage, setSelectedLanguage] = useState(
		localStorage.getItem("selectedLanguage") || "ko-KR",
	);

	return (
		<LanguageStore.Provider value={{ selectedLanguage, setSelectedLanguage }}>
			{children}
		</LanguageStore.Provider>
	);
};

export default LanguageStoreProvider;
