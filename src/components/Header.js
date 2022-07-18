import { React, useEffect, useState } from 'react'
import styled from "styled-components";
import axios from "axios";
import { BsSearch, BsNewspaper } from "react-icons/bs";
import useFetch from "./useFetch";


function Header() {

    const [input, setInput] = useState('pakistan');
    const [datas, everything, bussiness] = useFetch();
    return (

        <Wrapper className="header">
            <nav>
                <ul className="nav-logo">
                    <li><a href="">NewsZ</a></li>
                </ul>
            </nav>
            <div className="header-container">
                <div className="header-top">
                    <div className="title">
                        <h1>Search worldwide news</h1>
                        <p>
                            Locate articles and breaking news headlines from
                            news sources and <br />blogs.
                        </p>
                    </div>
                    <div className="search-box">
                        <div className="form">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="search" >
                                    <input type="search" className="searchinput" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                                    <input type="submit" value="Search" className="btn" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <h1>Top headlines</h1>
                    <div className="headlines">
                        {datas.map((data) => {
                            const { author, title, description, urlToImage, url } = data;
                            return (
                                <div className="row" key={title} >
                                    <a href={url}><img src={urlToImage} alt="urlimage" className="row__poster" /></a>
                                    <h4>{title}...</h4>
                                    <p>{description}...</p>
                                    <p><span className="author">Author:{author}</span></p>
                                </div>
                            )
                        })}
                    </div>

                    <h1>Everything</h1>
                    <div className="headlines">
                        {everything.map((data) => {
                            const { author, title, description, urlToImage, url } = data;
                            return (
                                <div className="row" key={title} >
                                    <a href={url}><img src={urlToImage} alt="urlimage" className="row__poster" /></a>
                                    <h4>{title}...</h4>
                                    <p>{description.substring(0, 100)}...</p>
                                    <p><span className="author">Author:{author}</span></p>
                                </div>

                            )
                        })}
                    </div>
                    <h1>Bussiness</h1>
                    <div className="headlines">
                        {bussiness.map((data) => {
                            const { id, name, description, url } = data;
                            return (
                                <div className="row" key={id} id="bussiness">
                                    <a href={url}><img src="https://via.placeholder.com/150" alt="urlimage" className="row__poster" /></a>
                                    <h4>{name}</h4>
                                    <p>{description}...</p>
                                </div>
                            )
                        })}
                    </div>




                </div>
            </div>
        </Wrapper>
    )
}



const Wrapper = styled.section`

.row{
    margin-left:20px;
    padding:20px;
}
.bussines{
    margin-left:20px;
    padding:20px; 
width:100%;
}

.headlines{
    display:flex;
    overflow-y:hidden;
    overflow-x:scroll;
    padding:20px;
    height:500px;
}
#bussiness{
    width:300px;
    transition:transform 450ms;
    height:300px;

}
.headlines::-webkit-scrollbar{
    display:none;
}

.row__poster{
    object-fit:contain;
    width:300px;
    border-radius:2%;
    transition:transform 450ms;
}

.row__poster:hover{
    transform:scale(1.08);
    opacity:1;
}



.author{
    color:#666666;
    font-weight:bold;
font-size:13px;
}


.header-bottom{
    padding:20px;
    margin-top:50px;
}
.nav-logo{
    display:flex;
    justify-content:start;
padding:20px;
position: fixed;
z-index:1;

}
ul li{
    list-style:none;
}
ul li a{
    text-decoration:none;
    color:Black;
    font-size:20px;
    font-weight:bold;
    border:solid 1px black;
    padding:10px;
}

.header-top{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${'' /* padding:40px; */}
padding-right:50px;
}

.title{
    margin-top:100px;
    ${'' /* padding:30px; */}
}

.title h1{
    font-size:40px;
text-align:center;
}
.title p{
    padding:10px;
    text-align:center;
    font-size:20px;
    color:#A18D7F;
}

.searchinput{
    width:400px;
    padding:10px;
    
}
.btn{
    padding:10px;
    color:white;
    background-color:black;
}
.search-box{
    padding-top:30px;
}

`
export default Header