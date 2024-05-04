
import { render, screen } from '@testing-library/react';
import Login, { validateEmail } from './Login';
import userEvent from '@testing-library/user-event'

describe('Test the suite',()=>{
    test('render the button',async()=>{
         render(<Login/>)
         const buttonList= await screen.findAllByRole('button')
         expect(buttonList).toHaveLength(2)

    })
    test('check email value',()=>{
        const email='admin@mail.com'
        expect(validateEmail(email)).toBe(true)
    })
    test('check value',()=>{
        render(<Login/>)
        const email=screen.getByPlaceholderText('Enter email')
        userEvent.type(email,"admin@mail.com")
        expect(email.value).toMatch('admin@mail.com')
    })

    test('check password',()=>{
        render(<Login/>)
        const password= screen.getByPlaceholderText('Password')

        
        expect(password).toHaveAttribute("type","password")
    })
    test('value chack',async()=>{

        render(<Login/>)
        const email=screen.getByPlaceholderText('Enter email')
        const password= screen.getByPlaceholderText('Password')
        const buttonList= await screen.findAllByRole('button')
        userEvent.type(email,"adminmailcom")
        userEvent.type(password,"1234")
        userEvent.click(buttonList[0])
        const error= screen.getByText("Email is not valid")
        expect(error).toBeInTheDocument()
    })

})
