class App extends React.Component {
<<<<<<< HEAD
  state = {
    name: '',
    origin: '',
    howOld: '',
    ytUrl: '',
    instruments: [],
  }

  handleChange =  (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  handleSubmit = event => {
  event.preventDefault()
  axios
    .post('/instruments', this.state)
    .then(response =>
      this.setState({ animals: response.data, name: '', origin: '', howOld: '',ytUrl: '' })
    )
}

deleteInstrument = (event) => {
  axios.delete('/instruments/' + event.target.value).then((response) => {
    this.setState({
      instruments: response.data,
    })

  })

}
updateInstrument = (event) => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/instruments/' + id, this.state).then((response) => {
    this.setState({
      instruments: response.data,
      name: '',
      origin: '',
      howOld: '',
      ytUrl: '',
    })
  })
}
componentDidMount = () => {
  axios.get('/instruments').then((response) => {
    this.setState({
      instruments: response.data,
    })
  })
}
=======
>>>>>>> a56356bc36e0abe3d047f1193a9addfe3bdb2f17

    render = () => {
        return <div>
            <h1>Instruments of the World</h1>

            <h2>Featured Instruments</h2>
            <section id="listOfInstruments">
            <ul>
                {this.state.instruments.map((instrument) => {
                    return <li key={instrument._id}>
                        <iframe width="560" height="315" src={instrument.ytUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br/>
                        {instrument.name}
                        <br/>
                        {instrument.origin}, {instrument.howOld}
                        <br/>

                        <button value={instrument._id} onClick={this.deleteInstrument}>Remove</button>
                        <br/>

                        <details>
                            <summary>Edit {instrument.name} Details</summary>
                            <form id={instrument._id} onSubmit={this.updateInstrument}>
                            <label htmlFor="ytUrl">URL</label>
                                <br />

                                <label htmlFor="name">Name</label>
                                <br />
                                <input
                                type="text"
                                id="name"
                                value={instrument.name}
                                onChange={this.handleChange}
                                />
                                <br />

                                <input
                                type="text"
                                id="ytUrl"
                                value={instrument.ytUrl}
                                onChange={this.handleChange}
                                />
                                <br />

                                <label htmlFor="image">Origin</label>
                                <br />
                                <input
                                type="text"
                                id="image"
                                value={instrument.origin}
                                onChange={this.handleChange}
                                />
                                <br />

                                <label htmlFor="howOld">Year Created</label>
                                <br />
                                <input
                                type="text"
                                id="howOld"
                                value={instrument.howOld}
                                onChange={this.handleChange}
                                />
                                <br />

                                <input type="submit" value="Update Details" />
                            </form>
                        </details>

                    </li>
                })}
            </ul>
            </section>

            <section id="addInstrument">
                <h3>Add an Instrument to the Database</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <br/>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="origin">Origin</label>
                    <br/>
                    <input type="text" id="origin" onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="howOld">Year Created</label>
                    <br/>
                    <input type="text" id="howOld" onChange={this.handleChange}/>
                    <br/>

                    <label htmlFor="ytUrl">YouTube Link</label>
                    <br/>
                    <input type="text" id="ytUrl" onChange={this.handleChange}/>
                    <br/>

                    <input type="submit" value="Add Instrument" />

                </form>
                </section>

        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
