import anxious from '../type_pics/anxious.png'

export default function AnxiousPage(){
    return <div className="type-description">
        <h1>Anxious Aly</h1>
        <p>Quote: <b><i>"I'm scared 0-0"</i></b></p>
        <img src={anxious}/>
        <div className="description">
            <p>The anxious aly walks around avoiding eye contact and hiding from people 0-0.
                She hates being talked to and wants to be alone.

            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + runs away fast
                    </li>
                    <li>
                        + the high anxiety protects from a lot of danger
                    </li>
                    <li>
                        + is always prepared for something bad to happen
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - high anxiety makes it impossible to do loads of social tasks
                    </li>
                    <li>
                        - misses a lot of life by running away and hiding
                    </li>
                    <li>
                        - often over worries about things that are not dangerous
                    </li>
                </ul>

            </div>
        </div>
    </div>
}