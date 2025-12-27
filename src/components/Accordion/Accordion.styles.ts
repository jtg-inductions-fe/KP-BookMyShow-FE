import {
    Accordion,
    accordionClasses,
    accordionSummaryClasses,
    styled,
} from '@mui/material';

export const StyledAccordion = styled(Accordion)(
    ({ theme: { palette, spacing } }) => ({
        backgroundColor: palette.secondary.light,
        padding: `0 ${spacing(2)}`,
        border: `1px solid ${palette.secondary.main}`,
        '&:before': {
            display: 'none',
        },
        [`& .${accordionSummaryClasses.root}:focus-visible .${accordionSummaryClasses.expandIconWrapper} svg`]:
            {
                color: palette.text.primary,
            },
        [`&.${accordionClasses.root}.${accordionClasses.expanded}`]: {
            margin: 0,
        },
    }),
);
