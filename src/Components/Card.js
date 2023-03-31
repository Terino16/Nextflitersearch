export default function Card( {name , language, id ,bio,version} )
{
    return(
        <>
        <div key={id} className=" m-2 p-3 w-[400px] border border-sky-500">
            <p > <span className="font-bold">Name :</span>{name}</p>
            <p > <span className="font-bold">Language  : </span> {language}</p>
            <p > <span className="font-bold">Bio: </span>{bio}</p>
        </div>
        </>
    )
}