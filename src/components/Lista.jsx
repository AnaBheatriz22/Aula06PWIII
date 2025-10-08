function Lista ({ itens }){

    return (
        <>
            <h3>Lista de Personagens Moranguinho🍓</h3>
            {itens.length > 0 ? (
            
            itens.map((item,index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não Existem Itens na Lista!!!</p>
            )}
        </>
    )
}
export default Lista