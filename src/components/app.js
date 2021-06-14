import React, {useEffect} from 'react'
import { Container, Jumbotron } from 'reactstrap'
import '../styles/index.scss'
import Header from './Header/Header'
import Purchase from './Purchase/Purchase'

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../store';

const App = () => {
    useEffect(() => {
        // if(!sessionStorage.getItem('profile')) {
        //     window.location.href = "http://localhost:4000/login?";
        // }
    }, [])
    return(
        <div className="showroom">
            <Provider store={store}>
                <Jumbotron>
                    <Container>
                        <Purchase />
                    </Container>
                </Jumbotron>
            </Provider>
            {/* <Header/> */}
            
            
        </div>
    )
}

export default App;