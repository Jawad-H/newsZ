import { React, useState, useEffect } from 'react'
import axios from "axios";
function useFetch(input) {

    const [datas, setDatas] = useState([]);
    const [everything, setEverything] = useState([]);
    const [bussiness, setBussiness] = useState([]);
    const fetcHeadlines = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=0e0e6d4d1ee847fa878e9970c951fa69`)
        setDatas(response.data.articles)
    }

    const fetchEverything = async (url) => {
        const response = await axios.get(url);
        setEverything(response.data.articles)
    }
    const fetchBussiness = async () => {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=0e0e6d4d1ee847fa878e9970c951fa69')
        setBussiness(response.data.sources);
    }

    useEffect(() => {
        fetcHeadlines();
        fetchEverything(`https://newsapi.org/v2/everything?q=${input}&apiKey=0e0e6d4d1ee847fa878e9970c951fa69`)
        fetchBussiness()
    }, [input]);

    return [datas, bussiness, everything];
}

export default useFetch;