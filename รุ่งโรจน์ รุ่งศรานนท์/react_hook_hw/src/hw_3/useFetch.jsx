import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(url)
        .then(d => d.json())
        .then(d => setData(d))
    }, [url])
    return [data]
}
