import gamer from '../type_pics/gamer.png'

export default function GamerPage(){
    return <div className="type-description">
        <h1>Gamer Aly</h1>
        <p>Quote: <b><i>"Epic gamer moment"</i></b></p>
        <img src={gamer}/>
        <div className="description">
            <p>
                The gamer aly games all day and all night. Games are everything and wasting time is epic as hell!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + pro gamer
                    </li>
                    <li>
                        + loves games
                    </li>
                    <li>
                        + Knows how to have a fun gaming moment
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - procrastinates
                    </li>
                    <li>
                        - doesn't get real work done
                    </li>
                    <li>
                        - low motivation
                    </li>
                </ul>

            </div>
        </div>
    </div>
}