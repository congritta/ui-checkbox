import { ReactNode } from "react";
export default function Checkbox(props: {
    isActive: boolean;
    contents?: ReactNode;
    onTriggered?(): void;
    unactiveIcon?: JSX.Element;
    activeIcon?: JSX.Element;
    wrapperClassName?: string;
    iconClassName?: string;
    contentsClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map