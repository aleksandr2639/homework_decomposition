//Компонент NewsItem отвечает за отрисовку списка из массива ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']
const NewsItem = ({ lists }) => {

    return (
        <ul className="">
            {
                lists.map((el) => (
                    <li key={el.id}>
                        <span>{el.img}</span>
                        <a href="/" className="">{el.title}</a>
                    </li>
                ))
            }
        </ul>
    )

}
export default NewsItem;
