import { Grid2 } from '@mui/material';

import { CustomGridProps } from './Grid.types';

/**
 * Generic grid component responsible for rendering grid items of provided data.
 * @param props passed by parent.
 * @returns The Grid with provided data
 */
export const Grid = <T,>(props: CustomGridProps<T>) => {
    const {
        gridColumns = { xs: 12, sm: 6, md: 4, lg: 3 },
        gridItemsData,
        renderNode,
    } = props;
    return (
        <Grid2 container direction={'row'} spacing={10}>
            {gridItemsData?.map((data, index) => (
                <Grid2 key={index} size={gridColumns}>
                    {renderNode(data)}
                </Grid2>
            ))}
        </Grid2>
    );
};
