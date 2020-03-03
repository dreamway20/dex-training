import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import {Sidebar} from "./components/sidebar/sidebar";
import {News, OneNews} from "./components/newsbar/News";
import {Index} from "./components/Index";

function App() {
    return (
        <BrowserRouter>
            <div>
                <main className="layout">
                    <Sidebar/>

                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route path="/news">
                            <Route path='/news' component={News}/>
                            <Route path='/news/:newsId' component={OneNews}/>
                        </Route>
                        <Route path="/teams">
                            команды
                        </Route>
                        <Route path="/players">
                            игроки
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
