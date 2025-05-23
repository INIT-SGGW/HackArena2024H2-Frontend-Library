import './Statues.css'

function Statues({ statuesData }: { statuesData?: { title: string, fileName: string }[] }) {
    return (
        <div className="statues">
            {
                statuesData &&
                <div className='statues__row'>
                    {
                        statuesData.map((statue, index) => {
                            if ((index + 1) % statuesData.length === 0) {
                                return (
                                    <a key={index} href={`/Assets/Regulaminy/${statue.fileName}`}>{statue.title}</a>
                                )
                            }
                            return (
                                <>
                                    <a href={`/Assets/Regulaminy/${statue.fileName}`}>{statue.title}</a>
                                    <span>|</span>
                                </>
                            )
                        })
                    }
                </div>
            }
            <p>© {new Date().getFullYear()} HackArena</p>

        </div>
    )
}

export default Statues