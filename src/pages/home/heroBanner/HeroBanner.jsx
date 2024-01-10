import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import "./style.scss"
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home);
    const {data, loading} = useFetch("/movie/upcoming");
    useEffect(()=> {
        const bg = url.backdrop + data?.results[Math.floor(Math.random()*20)]?.backdrop_path;
        setBackground(bg);
    }, [data])
    // const searchQueryHandle = (event) => {
    //     if(event.key === "Enter" && query.length > 0) {
    //         navigate(`/search/${query}`);
    //         setTimeout(() => {
    //           setShowSearch(false);
    //         },1000);
    //     }
    // }
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">Millions of movies, TV shows to discover. Explore now.</span>
        </div>
      </ContentWrapper>
    </div>
  )
}
export default HeroBanner