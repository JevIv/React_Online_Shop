import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import axios from 'axios';
import MenuComponent from "./menu";
import BookCard from "./bookCard";
import { Card } from 'semantic-ui-react';
import FilterContainer from "../containers/FilterContainer";


class App extends Component {

    componentWillMount() {
        const { setBooks } = this.props;
        axios.get('/assets/books.json').then(({ data }) =>{
            setBooks(data);
        });
    }

    render() {
        const { books, isReady } = this.props;
        return (
            <Container>
                <MenuComponent />
                <FilterContainer />
                <Card.Group itemsPerRow={4}>
                    {
                        ! isReady
                        ? 'Loading...'
                        : books.map((book, i) =>(
                            <BookCard key={i} {...book}/>
                    ))}
                </Card.Group>
            </Container>
        );
    }

}

export default App;

