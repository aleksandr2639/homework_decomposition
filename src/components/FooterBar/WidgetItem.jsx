const WidgetItem = (props) => {
    return (
        <div className={'widget-item'}>
            <div className={'widget-item__title'}><a href={props.url}>{props.title}</a></div>
            {props.children}
        </div>
    )
}

export default WidgetItem;
