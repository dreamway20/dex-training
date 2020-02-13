import React from "react";

export function MenuNews({active, children, ...restProps}) {
    const className=`news ${active ? 'active' : ''}`;

    return (
        <a className={className}{...restProps}>
            {children}
        </a>
    )
}

let id=1;

const NEWS= [
    {id: id++, name: 'one', prewiew: 'image1' },
    {id: id++, name: 'two', prewiew: 'image2' },
    {id: id++, name: 'three', prewiew: 'image3' },
    {id: id++, name: 'four', prewiew: 'image4' },
]

export function News ({ value }) {
    const [localValue, setLocalValue] = React.useState(value);

    return (
        <div>
            <input value={localValue} onChange={e => setLocalValue(e.target.value)} />
        </div>
    )
}

function App() {
    const [News, setNews] = React.useState(NEWS);
    const addNews = () => setNews([{ id: id++, name: 'five', prewiew:'image5'}, ...News]);

    return (
        <div>
            <button onClick={addNews}>+</button>
            {News.map((News) => (
                <News value={News.name} key={News.id} />
            ))}
        </div>
    )
}