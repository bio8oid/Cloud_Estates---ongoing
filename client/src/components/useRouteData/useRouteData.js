import { useState, useEffect } from "react";


const useRouteData = props => {

    const [routeTag, setRouteTag] = useState("");
    const [propertyId, setPropertyId] = useState({});
    const [routeData, setRouteData] = useState({});

    const propsData = props.location.state;
    
    useEffect(() => {

        // To keep state after page reload


        const routeTagData = propsData === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : propsData.route;

        const idData = propsData === null ? JSON.parse(localStorage.getItem('keptRouteId')) : propsData.id === undefined ? 0 : propsData.id;

        const setLocalStorageId = data => localStorage.setItem('keptRouteId', JSON.stringify(data));

        const setLocalStorageTag = data => localStorage.setItem('keptRouteTag', JSON.stringify(data));

        const setTag = async () => {
            setPropertyId({ name: '"id"', value: idData });
            setRouteTag(routeTagData);
            setRouteData({ name: '"tag"', value: routeTagData });
            setLocalStorageId(idData);
            setLocalStorageTag(routeTagData);
        };
        setTag();
    }, [propsData]);

    return { routeTag, propertyId, routeData };
};


export default useRouteData;