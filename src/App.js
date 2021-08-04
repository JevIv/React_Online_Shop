import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { setBooks } from './actions/books-action';
import axios from 'axios';
import MenuComponent from "./components/menu";
import BookCard from "./components/bookCard";
import { Card } from 'semantic-ui-react';


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

const mapStateToProps = ({ books }) => ({
    books: books.items,
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

