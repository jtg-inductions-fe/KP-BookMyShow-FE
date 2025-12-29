import { Grid2 } from '@mui/material';

import { CustomGridProps } from './Grid.types';

/**
 * Generic grid component responsible for rendering grid items of provided data.
 * @param props passed by parent.
 * @returns The Grid with provided data
 */
export const Grid = <T,>(props: CustomGridProps<T>) => {
    const {
        gridColumns,
        gridItemsData,
        renderNode,
        spacing = 10,
        ...gridProps
    } = props;
    return (
        <Grid2 {...gridProps} container spacing={spacing}>
            {gridItemsData?.map((data, index) => (
                <Grid2 key={index} size={gridColumns}>
                    {renderNode(data)}
                </Grid2>
            ))}
        </Grid2>
    );
};
