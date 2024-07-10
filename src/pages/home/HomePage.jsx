
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
function HomePage() {
    return (
        <div className=''>
            <Navbar />
            <Featured type="movie" />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default HomePage
