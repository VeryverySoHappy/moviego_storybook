interface IPlaceItemProps {
    imgSrc: string;
    imgAlt: string;
    children: string;
}

const PlaceItem = ({imgSrc, imgAlt, children} : IPlaceItemProps) => {
    return (
        <li className="detail">
            <img src={imgSrc} alt={imgAlt} className="place__list" />
            <p className="detail__text">{children}</p>
        </li>
    );
}

export default PlaceItem;