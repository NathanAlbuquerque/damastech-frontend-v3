export default function Botao({ children, cor = "damastech", texto = "white" }) {
    return (
        <>
            <div>
                <button className={`flex gap-2 bg-${cor} hover:bg-${cor}-900 py-4 px-12 rounded-2xl text-${texto} text-lg font-semibold cursor-pointer transition`}>
                    { children}
                </button>
            </div>
        </>
    )
}
