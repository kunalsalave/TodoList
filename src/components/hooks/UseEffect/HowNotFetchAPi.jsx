import "./Pokemon.css";

export const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState ([]);

    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((res) => res.json())
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error));

    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).
    then((res) => res.json())
    .then((data) => console.log(data))
    .then((error) => console.log(error));
 
    return (
        <div classname="conatiner effect-container">
            <ul>data:
                {
                    apiData.map((curData) => {
                        return <li key ={curData.id}> {curData.post} </li>
                    })
                }
            </ul>

        </div>
    );
};