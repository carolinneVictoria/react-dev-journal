import './sub-heading.style.css'

export function SubHeading ({ children }) {
    if (!children) return <></>
    return (
        <div>
            <h2 className='subheading'>
                { children }
                <p>Uma descrição.</p>
            </h2>
        </div>
    )
}