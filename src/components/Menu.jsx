import React from "react";
import { Menu, List, Button, Image, Popup } from 'semantic-ui-react';

const CartComponent = ({title, id, image, removeFromCart}) => (
    <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color='red'>Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>

  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item
          name='browse'
          onClick={this}>
          Books shop
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            onClick={this}>
            <b>Total price: &nbsp; {totalPrice} £</b>
          </Menu.Item>

          <Popup
            trigger={
              <Menu.Item
                name='help'
                onClick={this}>
                In basket (<b>{count}</b>) books
              </Menu.Item>}
            content={items.map(book => <CartComponent {...book}/>)}
            on='click'
            hidenOnScroll
            />
        </Menu.Menu>
      </Menu>
)

export default MenuComponent;
