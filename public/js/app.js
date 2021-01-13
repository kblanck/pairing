class App extends React.Component {
    render = () => {
        return <div>
            <h1>Instruments of the World</h1>

            <h2>Featured Instruments</h2>
            <ul>
                {this.state.instruments.map((instrument) => {
                    
                })}
            </ul>

        </div>
    }
}