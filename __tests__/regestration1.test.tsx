import '@testing-library/jest-dom'
import { fireEvent, render,screen } from '@testing-library/react'
import Regestration_step1 from'../app/regestration1/page'

describe("UI rendering",()=>{

    it("Text rendering checking for comp Regestration1",()=>{
        render(<Regestration_step1/>);
        expect(screen.getByText('Regestration Step 1')).toBeInTheDocument();
    })

    it("Checking of Onchange for firstname",()=>{
        render(<Regestration_step1/>);
        let input=screen.getByTitle('firstName');
        fireEvent.change(input,{target:{value:"Arvind"}}); 
        expect(input.value).toBe("Arvind");
    })

    it("Checking of Onchange for middlename",()=>{
        render(<Regestration_step1/>);
        let input=screen.getByTitle('middleName');
        fireEvent.change(input,{target:{value:"kumar"}}); 
        expect(input.value).toBe("kumar");
    })

    it("Checking of Onchange for lastname",()=>{
        render(<Regestration_step1/>);
        let input=screen.getByTitle('lastName');
        fireEvent.change(input,{target:{value:"chalka"}}); 
        expect(input.value).toBe("chalka");
    })

    it("Checking of Onchange for email",()=>{
        render(<Regestration_step1/>);
        let input=screen.getByTitle('email');
        fireEvent.change(input,{target:{value:"ak@12"}}); 
        expect(input.value).toBe("ak@12");
    })

    it("Checking of submition of button",()=>{
        render(<Regestration_step1/>);
        let btn=screen.getByRole('button');
        fireEvent.submit(btn); 
    })
})