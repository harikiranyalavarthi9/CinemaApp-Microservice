console.log("Visibility Toggle App");

let details = false;

const toggle = () => {
    details = !details;
    toggleRender();
}

const appRoot = document.getElementById("app");

const toggleRender = () => {
    var template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details && (<p>Hello!</p>)}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

toggleRender();