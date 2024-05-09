import './HeadSection.css'

export default function HeadSection({ data }) {

    return (
        <div className="head__section">
            <span className="head__section-legend">{data.legend}</span>
            <h1 className="head__section-title">{data.title}</h1>
            <p className="head__section-description">{data.text}</p>
        </div>
    )
}