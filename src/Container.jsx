function Container({ children }) {
    return (
        <>
            <div className="flex justify-center">
                <div className="bg-amber-400 container py-10">
                    { children }
                </div>
            </div>
        </>
    )
}

export default Container
