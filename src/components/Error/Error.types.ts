/**
 * Props for the Error component.
 */
export type ErrorProps = {
    /** Path to the image to be displayed on the error page. */
    imgPath: string;

    /** Name or description of the image. */
    imgName: string;

    /** Heading text for the error page. */
    heading: string;

    /** Description or details about the error. */
    description: string;

    /** Text to be displayed on the button. */
    buttonText?: string;

    /** Callback function to handle button click. */
    handleClick?: () => void;
};
