function EntrarIcone({ cor, width, height }) {
    cor = cor ? cor : 'damastech'
    width = width ? width : '30'
    height = height ? height : '30'
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path className={`stroke-${cor}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9-4-4m4 4-4 4m4-4H5"/>
            </svg>
        </>
    )
}

export default EntrarIcone
