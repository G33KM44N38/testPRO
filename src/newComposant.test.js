import { render, screen, fireEvent } from '@testing-library/react';
import NewComposant from './newComposant'

test('renders learn react link', () => {
    render(<NewComposant />);
    const linkElement = screen.getByText(/Mon super composant/i);
    expect(linkElement).toBeInTheDocument();
});

test('should renders', () => {
    const messageATester = "kylian il est trop fort"
    render(<NewComposant>{messageATester}</NewComposant>);
    expect(screen.queryByText(messageATester)).toBeNull()
    fireEvent.click(screen.getByText(/Mon super composant/))
    expect(screen.getByText(messageATester)).toBeInTheDocument()
})
