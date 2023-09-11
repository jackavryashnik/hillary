import { useEffect, useState } from "react";

const itemData = () => {
    const [data, setData] = useState(null);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://dev.drop.hillary.ua/api/landing/config?landing_alias=grape", requestOptions);
            const response = await result.json();
            
            setData(response);
        };

        fetchData();
    }, []);

    return { data };
};

export default itemData;
