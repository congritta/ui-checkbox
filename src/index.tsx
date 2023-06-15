import React, {ReactNode} from "react";

import styles from "./index.module.css";

function DefaultUnactiveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/>
    </svg>
  )
}

function DefaultActiveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M10.041 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591zm-5.041-15c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/>
    </svg>
  )
}

export default function Checkbox(props: {
  isActive: boolean,
  contents?: ReactNode,

  onTriggered?(): void,

  unactiveIcon?: JSX.Element,
  activeIcon?: JSX.Element,

  wrapperClassName?: string,
  iconClassName?: string,
  contentsClassName?: string
}) {
  // Render
  return (
    <div
      className={[
        styles.Checkbox,
        props.wrapperClassName,
        ...(props.isActive ? ['_isActive'] : [])
      ].filter(Boolean).join(' ')}
      onClick={() => props.onTriggered?.()}
    >
      <div className={[styles.checkboxIcon, props.iconClassName].filter(Boolean).join(' ')}>
        {props.isActive ? (
          props.activeIcon ?? <DefaultActiveIcon />
        ) : (
          props.unactiveIcon ?? <DefaultUnactiveIcon />
        )}
      </div>

      {props.contents ? (
        <div className={[styles.checkboxContents, props.contentsClassName].filter(Boolean).join(' ')}>{props.contents}</div>
      ) : null}
    </div>
  );
}
