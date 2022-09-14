import ListarPokemons from "./components/ListarPokemons";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <h1>Pokédex</h1>
            <div id="caixaDeEntrada">
                <div style={{display: 'flex', flexDirection:'column', flexGrow: 1}}>
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <ListarPokemons/>
                    </div>
                </div>
            </div>
        </div>
    );
}
