import '@testing-library/jest-dom'
import { fireEvent, render,screen } from '@testing-library/react'
import Regestration_step2 from'../app/regestration2/page'

describe("UI rendering",()=>{
    it("Text rendering checking for comp Regestration1",()=>{
        render(<Regestration_step2/>);
        expect(screen.getByText('Regestration Step 2')).toBeInTheDocument();
    })

    it("Checking of Onchange for password",()=>{
        render(<Regestration_step2/>);
        let input=screen.getByTitle('password');
        fireEvent.change(input,{target:{value:"1231231"}}); 
        expect(input.value).toBe("1231231");
    })

    it("Checking of Onchange for cpassword",()=>{
        render(<Regestration_step2/>);
        let input=screen.getByTitle('cpassword');
        fireEvent.change(input,{target:{value:"1231231"}}); 
        expect(input.value).toBe("1231231");
    })

    it("Checking of submition of button",()=>{
        render(<Regestration_step2/>);
        let btn1=screen.getByTitle('next');
        let btn2=screen.getByTitle('prv');
        
        // expect(btn1).toHaveAttribute("type","button");
        // expect(btn2).toHaveAttribute("type","button");
    })
})