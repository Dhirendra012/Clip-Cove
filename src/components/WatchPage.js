import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () =>
{
    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("v"));


    useEffect(() => { dispatch(closeMenu()); }, []); 

    return (
        <div className="flex flex-col w-full">
            <div className="flex ">
                <div className="p-6">
                    <iframe 
                        className="rounded-lg"
                        width="1040" 
                        height="550" 
                        src={"https://www.youtube.com/embed/" +  searchParams.get("v")}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="w-full py-6 pr-6">
                    <LiveChat/>
                </div>
            </div>
            <CommentContainer/>
        </div>
    )
};

export default WatchPage;