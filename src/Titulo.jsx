function Titulo({ children, cor = "damastech" }) {
    return (
        <>
            <div className='flex justify-center'>
                <h2 className={`w-2/5 text-3xl text-${cor} font-semibold text-center uppercase`}>{ children }</h2>
            </div>
        </>
    )
}

export default Titulo
