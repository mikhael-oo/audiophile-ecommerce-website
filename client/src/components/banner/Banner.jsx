export default function Banner( { title } ) {
    return (
        <div className="h-[250px] flex justify-center items-center bg-main-black">
            <h2 className="h2 text-white">{title}</h2>
        </div>
    )
}