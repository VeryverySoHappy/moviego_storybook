import PlaceItem from "./PlaceItem";

interface IPlaceListProps<T extends string> {
    imgSrc: T[];
    imgAlt: T[];
    placeList: T[];
}

const PlaceList = <T extends string>({
    imgSrc,
    imgAlt,
    placeList
}:IPlaceListProps<T>) => {
    return (
        <ul className="">
            {placeList.map((place) => (
                <PlaceItem
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                    key={place}
                >
                    {place}
                </PlaceItem>
            ))}
        </ul>
    );
}

export default PlaceList;