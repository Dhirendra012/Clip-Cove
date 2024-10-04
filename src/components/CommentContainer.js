const commentsData = [
    {
        name: "Dhirendra Singh",
        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
        reply: [
            {
                name: "Dhirendra Singh",
                text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                reply: [
                    {
                        name: "Dhirendra Singh",
                        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                        reply: []
                    },{
                        name: "Dhirendra Singh",
                        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                        reply: []
                    },
                ]
            },
            {
                name: "Dhirendra Singh",
                text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                reply: []
            },
        ]
    },
    {
        name: "Dhirendra Singh",
        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
        reply: [
            {
            name: "Dhirendra Singh",
            text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
            reply: []
        },
        {
            name: "Dhirendra Singh",
            text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
            reply: [{
                name: "Dhirendra Singh",
                text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                reply: []
            },
            {
                name: "Dhirendra Singh",
                text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
                reply: []
            },]
        },
        ]
    },
    {
        name: "Dhirendra Singh",
        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
        reply: []
    },
    {
        name: "Dhirendra Singh",
        text: "Nhi pta kuch bhi likh rha hu check krne ke liye",
        reply: []
    },
]

const Comment = ({data}) => 
{
    const {name , text , reply} = data;

    return (
        <div>
            <div className="flex shadow-sm bg-green-100 p-2 rounded-lg">
                <img className="h-12 w-12" alt="userIcon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                <div className="px-3">
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                </div>
            </div>
            { reply.map((s , index) => <div className="pl-5 border border-l-black ml-5"> <Comment key={index} data={s}/> </div>)}
        </div>
        
    )
}

const CommentContainer = () => 
{
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments :</h1>
            { commentsData.map((com , index) => <Comment key={index} data={com}/>)}
        </div>
    );
};

export default CommentContainer;