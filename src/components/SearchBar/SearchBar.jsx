//Компонент Search_Bar отвечает за отрисовку поисковой строки со списком виджетов
import WidgetLists from "./WidgetLists";
import  Input from './Input';

const lists = ['Видео', 'Картинки', 'Новости','Карты', 'Маркет']
const SearchBar = () => {
  return (
      <div>
          <h2 className="">Яндекс</h2>
          <div className="">
              <WidgetLists lists={lists} />
              <Input />
          </div>
      </div>

  )
}
export default SearchBar;
