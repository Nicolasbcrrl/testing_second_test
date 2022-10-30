import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import'@testing-library/jest-dom/extend-expect';
import TodoTable from'./TodoTable';

test('renders todotable', () => {
  const row = [
    {desc: 'Go to coffee', date: '30.10.2022'},
  ];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/Go to coffee/i);
  expect(tablecell).toBeInTheDocument();
});

test('add todo', ()=>{
  render(<App/>)
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: {value:'Go to coffee'}
  });
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: {value: '30.01.2021'}
  });
  const button = screen.getByText('Add');
  fireEvent.click(button);
  const tablecell = screen.getByText(/go to coffee/i);
  expect(tablecell).toBeInTheDocument();
})
