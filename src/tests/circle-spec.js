import { Circle } from '../circle';

describe('Circle', () => {
    // mock canvas context
    let context = jasmine.createSpyObj('context', ['arc', 'stroke', 'beginPath', 'fill', 'closePath', 'moveTo']);

    /** mock circle attributes **/
    let x=100, y=300, colour = "blue", 
        contextConfig = { 
            context: context,
            W: 1000, 
            H: 700,
            bounceRate: 0.4
        }; 
    /******************************/
    
    let testCircle;

    // create a new cicle instance before each test case passing mock data
    beforeEach(() => { 
        testCircle = new Circle(x, y, colour, contextConfig); 
    });

    // destroy the circle instance after each test case
    afterEach (() => { 
        testCircle = undefined;    
    });

    it('should draw circle on canvas', () => {
        testCircle.drawCircle();
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(x, y, testCircle.radius, 0, 2*Math.PI)
        expect(context.fill).toHaveBeenCalled();
        expect(context.closePath).toHaveBeenCalled();
    });

    it('should call headingUp()', () => {
        testCircle.max = false;
        
        // spy on headingUp method
        spyOn(testCircle, "headingUp");

        testCircle.upOrDown();
        
        expect(testCircle.headingUp).toHaveBeenCalled();

    });

    it('should call headingDown()', () => {
        testCircle.max = true;

        // spy on headingDown method
        spyOn(testCircle, "headingDown");
        testCircle.upOrDown();
        expect(testCircle.headingDown).toHaveBeenCalled();
    });

});