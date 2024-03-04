//Компонент Widget отвечает за отрисовку виджета
const Widget = ({ data }) => {
    return (
        <div>
            <img src={data.img}></img>
            <h2><a href={data.src}>Работа над ошибками</a></h2>
            <span>{data.title}</span>
        </div>
    )
}
export default Widget;
