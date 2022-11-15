import cute from '../type_pics/cute.png'

export default function CutePage(){
    return <div className="type-description">
        <h1>Cute Aly</h1>
        <p>Quote: <b><i>"You don't know me at all."</i></b></p>
        <img src={cute}/>
        <div className="description">
            <p>
               The Cute aly is adorable! She often is tired so she has to sit around. Uwuing her way in life, she learns more and more
                how to become better!
            </p>
            <div className="pros-list">
                <b>Pros:</b>
                <ul className="pros">
                    <li>
                        + adorable
                    </li>
                    <li>
                        + easy to like
                    </li>
                    <li>
                        + people find it hard to judge
                    </li>
                </ul>
                <b>Cons:</b>
                <ul className="cons">
                    <li>
                        - Lacks many major skills
                    </li>
                    <li>
                        - unable to walk much
                    </li>
                    <li>
                        - overly dependant
                    </li>
                </ul>

            </div>
        </div>
    </div>
}