# modale library
A modal with a message confirmation: "Employee Created!"
## Installation
Run the following command:
`npm i modale-hind08`

## Example of use
```
import { Fragment } from "react"
import { Modale } from "modale-hind08"
import exitIcon from "./exit.png"

function Home() {
    const [displayModal, setDisplayModal] = useState(false)
    return (
        <Fragment>
             <button onClick={() => setDisplayModal(true)}>Click here to show modal!</button>
            {displayModal && <Modale closeModal={() => setDisplayModal(false)} />}
        </Fragment>
    )
}

export default Home;
```