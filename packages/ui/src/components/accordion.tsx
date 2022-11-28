import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export type AccordionState = { expanded: boolean; toggle: () => void };
const AccordionContext = createContext<AccordionState | null>(null);

export function useAccordionContext(): AccordionState {
  const context = useContext<AccordionState | null>(AccordionContext);
  if (!context) {
    throw new Error(
      "Tried to access accordion context outside a suitable context provider."
    );
  }
  return context;
}

export type AccordionProps = {
  children: ReactNode;
};

export function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      {props.children}
    </AccordionContext.Provider>
  );
}

export type AccordionTogglerProps = {
  renderToggler: (args: { expanded?: boolean }) => ReactNode;
};
export function AccordionToggler(props: AccordionTogglerProps) {
  const { expanded, toggle } = useAccordionContext();
  return (
    <div role="button" onClick={toggle}>
      {props.renderToggler({ expanded })}
    </div>
  );
}

export type AccordionContentProps = {
  children: ReactNode;
};

export function AccordionContent(props: AccordionContentProps) {
  const { expanded } = useAccordionContext();
  if (!expanded) {
    return null;
  }

  return <>{props.children}</>;
}

export default Accordion;
