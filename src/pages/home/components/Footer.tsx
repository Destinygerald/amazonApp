import '../style.css'
import '../style.mobile.css'

export function Footer () {
	return (
		<div className='footer'>
			<span className='logo'>Union&Nest</span>
			<span> Everything you are looking for, All in one place. </span>

			<div className='footer-items'>
				<span>Home</span>
				<span> Benefits </span>
				<span> Why to Register </span>
				<span> Privacy Policy </span>
			</div>
			<div className='copy-right'>
				©Copyrights 2024. AllRights Reserved
			</div>
		</div>
	)
}