import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<div>home page</div>
			<Link to={'/about'}>About</Link>
		</div>
	)
}
