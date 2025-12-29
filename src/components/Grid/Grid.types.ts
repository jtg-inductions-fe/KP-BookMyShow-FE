import React from 'react';

import { Breakpoint } from '@mui/material';

/**
 * Defines the props structure for a generic grid component.
 *
 * @typeParam T  The type of data rendered in each grid item.
 *
 * @param gridItemsData Array of data items to be rendered within the grid.
 * @param renderNode Function responsible for rendering a grid item.
 * @returns A React node representing the grid item.
 */
export interface CustomGridProps<T> {
    gridColumns?: Partial<Record<Breakpoint, number>>;
    gridItemsData?: T[];
    renderNode: (data: T) => React.ReactNode;
}
