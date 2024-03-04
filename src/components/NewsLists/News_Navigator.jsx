//Компонент News_Navigator отвечает за отрисовку шапки меню новостей и списка новостей

import NewsItem from './NewsItem';
import NewsLists from './NewsLists ';
import Widget from './Widget';

const lists = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']

const news = [
    {
        id: Math.random(),
        img: "https://loremflickr.com/320/240",
        title: 'Наступил первый день весны',
    }
]

const data = [
    {
        img: "https://loremflickr.com/320/240",
        src: "https://loremflickr.com/320/240",
        title: 'Наступил первый день весны',
    }
]
const News_Navigator = () => {

    return (
        <nav className="">
            <NewsItem lists={lists} />
            <NewsLists news={news} />
            <Widget data={data} />
        </nav>
    )
}

export default News_Navigator;
