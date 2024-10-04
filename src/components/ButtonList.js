import Button from "./Button";

const ButtonList = () =>
{
    const list = ['All' , 'Music' ,"Motu Patlu" ,"Gaming" , "Dramedy", "Software Engineering" , "Tamil Cinema" , "Live"]

    return (
        <div className="flex">
            {
                list.map((name) => <Button key={name} name={name} />)
            }
        </div>
    );
};

export default ButtonList;
