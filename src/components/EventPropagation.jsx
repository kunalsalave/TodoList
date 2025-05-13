

export const EventPropagation = () => {
    const handleGrandparent = () => {
        console.log("Grandparent Clicked")
    };
    const handleparentClick = () => {
        console.log("Parent Clicked")
    };
    const handleChildClick = () => {
        console.log(event);

        console.log("Child Clicked");
    };
    return (
        <section className="main-div">
            <div className="g-div" onClick={handleGrandparent}>
                <div classname="p-div" onClick={handleparentClick}>
                    <button className="c-div" onClick={handleChildClick}>Child Div
                    </button>
                </div>
            </div>
        </section>
    );
};
