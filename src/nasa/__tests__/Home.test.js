import { render, screen, cleanup, getByTestId, fireEvent } from '@testing-library/react';
import { Home } from '../Home';

test('should render the component', () => {
    render(<Home />)
    const homeElement = screen.getByTestId('home-1')
    expect(homeElement).toBeInTheDocument();
})

test('should have the heading Asteroid Watcher App with testid', () => {
    render(<Home />)
    const homeHeading = screen.getByTestId('text-content')
    expect(homeHeading).toHaveTextContent('Asteroid Watcher App');
})

test('should have the heading Asteroid Watcher App with testid', () => {
    render(<Home />)
    const homeHeading = screen.getByTestId('text-title')
    expect(homeHeading).toHaveTextContent('Enter Asteroid ID to know more');
})

test('to test the heading-4 with role', () => {
    render(<Home />)
    const subtitle = screen.getByTestId('text-title')
    expect(subtitle).toBeInTheDocument()
})

test('to test the input field required option', () => {
    render(<Home />)
    const textfield = screen.getByPlaceholderText('Enter asteroid')
    expect(textfield).toBeInTheDocument()
    expect(textfield).toBeRequired()
})

test('should check the button is diabled at present moment with test id', () => {
    render(<Home />)
    const buttonDisabled = screen.getByTestId('button')
    expect(buttonDisabled).toBeDisabled();
})

test('should check the button is disabled by role', () => {
    render(<Home />)
    const button = screen.getByRole('button', { name: /Submit/i })
    expect(button).toBeDisabled();

})


test('should check the button random asteroid is not disabled', () => {
    render(<Home />)
    const randomButton = screen.getByRole('button', { name: /Random Asteroid/i })
    expect(randomButton).toBeEnabled();
})

test('testing', () => {
    let { debug, queryByText } = render(<Home />)
    let x = queryByText("Enter Asteroid ID to know more").innerHTML
    // debug()
    expect(x).toBe("Enter Asteroid ID to know more")
    // const input = screen.getByTestId('text-field', { name: /Enter Asteroid/i })
})


describe("<Home />", () => {
    test('on submit button', () => {
        render(<Home />)
        const submitButton = screen.getByTestId("button")
        fireEvent.click(submitButton)
    })
})