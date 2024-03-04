import { useState } from 'react';
import News_Navigator from './NewsLists/News_Navigator.jsx';
import Search_Bar from './SearchBar/Search_Bar';
import Footer_Bar from './FooterBar/Footer_Bar';
const Container = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="main">
            <News_Navigator />
            <Search_Bar />
            <Footer_Bar />
        </div>
    )
}

export default Container;
