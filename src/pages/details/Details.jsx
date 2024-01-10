import "./style.scss"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  return (
    <div>
      <DetailsBanner video={data?.results[0]}/>
    </div>
  )
}
export default Details