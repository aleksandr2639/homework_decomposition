//Компонент погоды
const WeatherWidget = ({ temperature }) => {
 return (
     <div className="" ><a href={temperature.url}>{temperature.title}</a>
       <div className="">{temperature.img}{temperature.current}</div>
       <div className="">
          <div>Утром{temperature.morning},</div>
          <div>Вечером{temperature.evening}</div>
       </div>
     </div>
 )

}

export default WeatherWidget;
