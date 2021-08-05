import React from 'react'
import { Input, Menu } from 'semantic-ui-react'


const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
    return(
        <Menu secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this,'all')}>
                All books
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this,'price_high')}>
                Price: High to Low
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this,'price_low')}>
                Price: Low to High
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'author'}
                onClick={setFilter.bind(this,'author')}>
                Author
            </Menu.Item>
            <Menu.Item>
                <Input
                    icon='search'
                    onChange={e => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder='Search'/>
            </Menu.Item>
        </Menu>)

};

export default Filter;