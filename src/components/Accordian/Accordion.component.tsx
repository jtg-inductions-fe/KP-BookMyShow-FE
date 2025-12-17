import { ExpandMoreOutlined } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary } from '@mui/material';

import { Typography } from '@components';

import { StyledAccordion } from './Accordion.styles';
import { StyledAccordionProps } from './Accordion.types';

/**
 * Custom Accordion component with theme specific styles,
 * @returns Accordion with passed children.
 */
export const Accordion = ({
    label,
    children,
    ...props
}: StyledAccordionProps) => (
    <StyledAccordion {...props}>
        <AccordionSummary
            expandIcon={<ExpandMoreOutlined color="secondary" />}
            aria-controls="accordion-content"
            id="accordion-header"
        >
            <Typography component="span">{label}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingBottom: 4 }}>
            {children}
        </AccordionDetails>
    </StyledAccordion>
);
