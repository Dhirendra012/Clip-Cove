const YOUTUBE_API_KEY = "&key=AIzaSyAuOCGq5JS5TDaCWOwHUHxhNtSk4uZn4gU";

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN' + YOUTUBE_API_KEY; 

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_BAR_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';