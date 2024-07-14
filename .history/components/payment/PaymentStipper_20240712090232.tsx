import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Stepper as PrimeStepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

interface StepperRef {
    nextCallback: () => void;
    prevCallback: () => void;
}

const Stepper = forwardRef<StepperRef, React.ComponentProps<typeof PrimeStepper>>((props, ref) => {
    const internalRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        nextCallback: () => {
            if (internalRef.current) {
                internalRef.current.nextCallback();
            }
        },
        prevCallback: () => {
            if (internalRef.current) {
                internalRef.current.prevCallback();
            }
        }
    }));

    return <PrimeStepper ref={internalRef} {...props} />;
});

const BasicDemo: React.FC = () => {
    const stepperRef = useRef<StepperRef>(null);

    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} className="w-20rem">
                <StepperPanel header="Header I">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div className="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div className="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    );
}

export default BasicDemo;
