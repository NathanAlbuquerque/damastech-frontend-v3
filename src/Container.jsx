export default function Container({ children, cor }) {
    return (
        <>
            <div className={`flex justify-center bg-${cor}`}>
                <div className="container py-10">
                    { children }
                </div>
            </div>
        </>
    )
}
