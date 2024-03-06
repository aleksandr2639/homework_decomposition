//Компонент виджетов погоды, телепрограммы и другие виджеты

import WeatherWidget from './WeatherWidget';
import WidgetItem from './WidgetItem';

const temperature = {
        title: 'Погода',
        irl: "",
        img:"https://loremflickr.com/320/240",
        current: "",
        morning: "",
        evening: "",
}
const FooterBar = () => {

    return (
        <nav className="">
            <WeatherWidget temperature={temperature}/>
            <WidgetItem title={'Карта германии'} url={''}>
                {/** Компонент */}
            </WidgetItem>

            <WidgetItem title={'Эфир'} url={''}>
                {/** Компонент */}
            </WidgetItem>

            <WidgetItem title={'Посещаемое'} url={''}>
                {/** Компонент */}
            </WidgetItem>

            <WidgetItem title={'Телепрограмма'} url={''}>
                {/** Компонент */}
            </WidgetItem>
        </nav>
    )
}
export default FooterBar;
