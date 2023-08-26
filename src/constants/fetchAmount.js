import { useEffect, useState } from "react";

const fetchAmount = () => {
    const [amount, setAmount] = useState('');

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("https://dev.drop.hillary.ua/api/cachevar/all", requestOptions);
            const response = await result.json();

            setAmount(response);
        };

        fetchData();
    }, []);

    return amount;
};

export default fetchAmount;
