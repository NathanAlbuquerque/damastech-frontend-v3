function Titulo({ children }) {
    return (
        <>
            <div className='flex justify-center'>
                <h2 className="w-2/5 text-3xl text-damastech font-semibold text-center uppercase">{ children }</h2>
            </div>
        </>
    )
}

export default Titulo
