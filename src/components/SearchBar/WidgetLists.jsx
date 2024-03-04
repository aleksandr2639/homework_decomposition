//Компонент WidgetLists отрисовывает список виджетов
const WidgetLists = ({ lists }) => {
    return (
        <ul className="">
            {
                lists.map((el) => (
                    <li key={el.id}>
                        <a href="/" className=""></a>
                    </li>
                ))
            }
        </ul>
    )
}
export default WidgetLists;
