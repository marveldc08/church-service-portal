import {render, screen, cleanup} from '@testing-library/react';
import SideNav from '../SideNav';
import Header from '../Header'
test('to render SideNav component', ()=>{
    render(<SideNav/>);
    expect(true).toBe(true);
    const sideNavElement = screen.getByTestId('sidenav');
    expect(sideNavElement).toBeInTheDocument;  
})
test('to render SideNav component', ()=>{
    render(<Header/>);
    expect(true).toBe(true);

})

