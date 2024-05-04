
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Test the suite',()=>{
    test('render the button',async()=>{
         render(<Login/>)
         const buttonList= await screen.findAllByRole('button')
         expect(buttonList).toHaveLength(2)

    })
})
