import '../styles/globals.css';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
function MyApp({ Component, pageProps }) {
	return (
		<div className='min-h-screen'>
			<TopNavBar />
			<div className='flex min-h-screen'>
				<SideNavBar />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
