import React from "react";
import { Menu } from 'semantic-ui-react';


const MenuComponent = () => (
    <Menu>
        <Menu.Item
          name='browse'
          onClick={this}
        >
          Books shop
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            onClick={this}
          >
            <b>Total: &nbsp; 0 £</b>
          </Menu.Item>

          <Menu.Item
            name='help'
            onClick={this}
          >
            Shopping basket: (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
)

export default MenuComponent;
