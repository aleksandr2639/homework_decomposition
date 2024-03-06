import { useState } from 'react';
import NewsNavigator from './NewsLists/NewsNavigator.jsx';
import SearchBar from './SearchBar/SearchBar';
import FooterBar from './FooterBar/FooterBar.jsx';
const Container = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="main">
            <NewsNavigator />
            <SearchBar />
            <FooterBar />
        </div>
    )
}

export default Container;
