import { Accordion, accordionClasses, styled } from '@mui/material';

export const StyledAccordion = styled(Accordion)(
    ({ theme: { palette, spacing } }) => ({
        backgroundColor: palette.secondary.light,
        padding: `0 ${spacing(2)}`,
        border: `1px solid ${palette.secondary.main}`,
        '&:before': {
            display: 'none',
        },

        [`&.${accordionClasses.root}.${accordionClasses.expanded}`]: {
            margin: 0,
        },
    }),
);
