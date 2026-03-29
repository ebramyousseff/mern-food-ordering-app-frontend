import { Link } from "react-router-dom";

type props ={
    total: number;
    city: string;
}
const SearchResultInfo = ({total, city}: props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:item-center lg:flex-row">
        <span>
            {total} Restaurant found in {city}
            <Link to="/" className=" ml-1 text-sm font-semibold underline cursor-pointer text-blue-500">Change Location</Link>
        </span>
        
    </div>
  )
}

export default SearchResultInfo