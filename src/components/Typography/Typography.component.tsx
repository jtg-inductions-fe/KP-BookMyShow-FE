import { useEffect, useRef, useState } from 'react';

import { Typography as MuiTypography } from '@mui/material';

import { theme } from '@theme';

import { CustomTypographyProps } from './Typography.types';

/**
 * Typography container which wrap the custom typography component.
 */
export const Typography = (props: CustomTypographyProps) => {
    const { lines, hasShowMore, ...muiProps } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [isOverflow, setOverflow] = useState(false);

    const descRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleResize = () => {
            if (!descRef.current || lines === undefined) return;

            const el = descRef.current;
            const styles = window.getComputedStyle(el);

            const lineHeight = parseFloat(styles.lineHeight);
            const totalLines = Math.round(el.scrollHeight / lineHeight);
            setOverflow(totalLines > lines);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [lines]);

    return (
        <>
            <MuiTypography
                sx={() => {
                    const shouldClamp =
                        !hasShowMore || (hasShowMore && !isExpanded);
                    return shouldClamp && lines
                        ? theme.mixins.lineClamp(lines)
                        : {};
                }}
                ref={descRef}
                {...muiProps}
            >
                {muiProps.children}
            </MuiTypography>
            {hasShowMore && isOverflow && (
                <MuiTypography
                    sx={{
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}
                    variant="caption"
                    component={'span'}
                    color="primary.main"
                    onClick={() => setExpanded(!isExpanded)}
                >
                    {!isExpanded ? 'show more' : 'show less'}
                </MuiTypography>
            )}
        </>
    );
};
