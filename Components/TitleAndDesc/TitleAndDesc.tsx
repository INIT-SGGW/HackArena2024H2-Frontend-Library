import './TitleAndDesc.css'

interface Props {
    text: {
        title: string,
        description: string
    }
}

function TitleAndDesc({ text }: Props) {
    return (
        <div className="tad pagewidth section">
            <h2 className='header__white'>{text.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: text.description }} />
        </div>
    )
}

export default TitleAndDesc