import { React, useEffect, useState } from 'react'
import axios from "axios";

function useFetch(input) {

    const [datas, setDatas] = useState([]);
    const [everything, setEverything] = useState([]);
    const [bussiness, setBussiness] = useState([]);
    const fetcHeadlines = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
        setDatas(response.data.articles)
    }

    const fetchEverything = async (url) => {
        const response = await axios.get(url);
        setEverything(response.data.articles)
    }
    const fetchBussiness = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${process.env.REACT_APP_API_KEY}`)
        setBussiness(response.data.sources);
    }

    useEffect(() => {
        fetcHeadlines();
        fetchEverything(`https://newsapi.org/v2/everything?q=${input}&apiKey=${process.env.REACT_APP_API_KEY}`)
        fetchBussiness()
    }, [input]);

    return [datas, everything, bussiness];
}

export default useFetch;