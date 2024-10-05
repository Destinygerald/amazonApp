// import { createContext, useContext, useState, ReactNode } from 'react'

// type PopupContextType = {
// 	isOpen: boolean;
// 	openPopup: () => void;
// 	closePopup: () => void; 
// }

// const PopupContext = createContext({} as PopupContextType)

// export function PopupContextFunction () {
// 	return (
// 		useContext(PopupContext)
// 	)
// }

// export function PopupContextProvider ({children}: ReactNode) {

// 	const [ isOpen, setIsOpen ] = useState<boolean>(false)

// 	function openPopup () {
// 		setIsOpen(true)
// 	}

// 	function closePopup () {
// 		setIsOpen(false)
// 	}

// 	return (
// 		<PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
// 			{children}
// 		</PopupContext.Provider>
// 	)
// }