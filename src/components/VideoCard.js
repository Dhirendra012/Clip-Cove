const VideoCard = ({info}) =>
{
    const {snippet , statistics} = info;
    const { channelTitle , title , thumbnails} = snippet;

    return (
        <div className="p-3 m-2 w-72">
            <img className="rounded-lg" alt="Video" src={thumbnails.medium.url}/>
            <ul>
                <li className="font-bold" >{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
};

export default VideoCard;