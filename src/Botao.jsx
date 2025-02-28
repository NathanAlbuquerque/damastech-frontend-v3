function Botao({ children }) {
    return (
        <>
            <div>
                <button className="flex gap-2 bg-damastech hover:bg-damastech-900 py-4 px-12 rounded-2xl text-white text-lg font-semibold cursor-pointer transition">
                    { children}
                </button>
            </div>
        </>
    )
}

export default Botao
