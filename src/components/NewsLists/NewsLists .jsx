//Компонент NewsLists отвечает за отрисовку списка из массива новостей
const NewsLists = ({ news }) => {

    return (
        <ul className="">
            {
                news.map((el) => (
                    <li key={el.id}>
                        <a href="/" className=""></a>
                    </li>
                ))
            }
        </ul>
    )

}
export default NewsLists;
