import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})
const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
             <BrowserRouter>
                 <Switch>
                     <Route exact path='/pricing' component={Pricing} />
                     <Route path='/' component={Landing} />
                 </Switch>
             </BrowserRouter>
        </StylesProvider>
    );
};

export default App;