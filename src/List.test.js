import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('<List />', () => {
it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[{title: 'first', content: 'lorem ipsum', id:'a'}, {title: 'second', content: 'lorem ipsum', id: 'b'}]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it ('renders UI as expected', () => {
    const tree = renderer
        .create(<List cards={[{title: 'first', content: 'lorem ipsum', id:'a'}, {title: 'second', content: 'lorem ipsum', id: 'b'}]} id= '1' header= 'First list' cardIds= {[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
});