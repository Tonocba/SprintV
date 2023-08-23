

export const Card = ({price,id, title, description, imagen}) => {
    return (
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
        
        
        
    )
}