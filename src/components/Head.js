import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice"

const Head = () => 
{
    // const [inputQuery , setInputQuery] = useState("");
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestions , setSuggestions] = useState([]);
    const [showSuggestion , setShowSuggestion] = useState(true);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const inputQuery = useRef("");

    useEffect(() => 
    {
        // Make an Api cll after every key press
        // But if the difference between 2 Api calls is less than 200ms
        // Decline the Api call
        const timer = setTimeout( () => 
        { 
            if(searchCache[searchQuery]){ setSuggestions(searchCache[searchQuery]); }
            else{ getSearchSuggestions() }
        }, 200);

        return () => {    clearTimeout(timer);    };

    }, [searchQuery]);

    // key - i
    // - Render the component
    // - useEffect();
    // - start timer => make API call after 200 ms

    // key - ip
    // - Destroy the component ( useEffect return method)
    // - Re-render the component
    // - useEffect()
    // - start timer => make api call after 200 mx

    const getSearchSuggestions = async () =>
    {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);
        dispatch( cacheResults({ [searchQuery] : json[1]}) );
    }

    const handleMenu = () => { dispatch(toggleMenu()) }

    return (
        <div className="grid grid-flow-col p-3 m-1 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={handleMenu} className="h-8 cursor-pointer" alt="menubar" src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"/>
                <img className="h-8 mx-3" alt="youtube" src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"/>
            </div>

            <div className="col-span-10 ml-40">
                <div onFocus={() => setShowSuggestion(true) }>
                    <div className="flex">
                        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value) } className="w-3/5 border border-gray-400 rounded-l-full p-1 pl-5 py-2" placeholder=" Search" type="text"/>
                        <button  className="border border-gray-400 rounded-r-full py-1 px-3" >🔍</button>
                        <img className="ml-4 h-8 border border-gray-500 p-1 rounded-full" alt="search" src="https://cdn-icons-png.flaticon.com/128/25/25682.png"/>
                    </div>
                    <div  className="absolute w-[37rem] pt-2  bg-white rounded-lg">
                        <ul>
                            {
                                showSuggestion && suggestions.map( s => <li key={s} onClick={(e) => { console.log(e.target.innerHTML); }} className="cursor-pointer py-2 px-5 shadow-sm hover:bg-slate-200">{s}</li> )
                            }
                        </ul>
                    </div>
                </div> 
            </div>

            <div className="flex col-span-1">
                <img className="h-8 mx-3" alt="notification" src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"/>
                <img className="h-8 " alt="userIcon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
};

export default Head;