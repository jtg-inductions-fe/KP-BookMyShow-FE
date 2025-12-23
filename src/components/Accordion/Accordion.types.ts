import { AccordionProps } from '@mui/material';

/**
 * Define the props of StyledAccordion.
 * Adds the `label` to the AccordionProps.
 */
export interface StyledAccordionProps extends AccordionProps {
    label: string;
}
