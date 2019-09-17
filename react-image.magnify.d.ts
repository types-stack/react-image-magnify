// Type definitions for react-image-magnify 0.0.1
// Project: https://github.com/gaearon/react-side-effect
// Definitions by: Sumit Parakh <https://github.com/sumitparakh/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-image-magnify' {

    import * as React from 'react';

    interface CommonImageType {
        src: string;
        srcSet?: string;
        sizes?: string;
        onLoad?: Function,
        onError?: Function
    }
    //TODO: implement conditional types
    interface SmallImageType extends CommonImageType {
        width?: number; // (required if isFluidWidth is not set)
        height?: number; // (required if isFluidWidth is not set)
        alt?: string;
        isFluidWidth: boolean; // default false
    }

    interface LargeImageType extends CommonImageType {
        width: number;
        height: number;
        alt?: string;
    }

    interface ReactImageMagnifyProps {
        smallImage: SmallImageType;
        largeImage: LargeImageType;
    }
    class ReactImageMagnify extends React.Component<ReactImageMagnifyProps> {

    }

    export default ReactImageMagnify;
}

