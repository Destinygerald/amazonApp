import '../style.css'
import '../style.mobile.css'
// import { PopupContextFunction } from '../../../context/PopupContext.tsx'

export function Navbar () {

	// const { openPopup } = PopupContextFunction()

	function handleClick () {
		// openPopup()
		return;
	}

	return (
		<div className='navbar'>
			<span className='logo'> Union&Nest </span>
			<button onClick={handleClick}> Create your registry </button>
		</div>
	)
}