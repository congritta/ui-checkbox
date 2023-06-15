# @congritta-ui/checkbox

This is checkbox React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/checkbox`;

Add

```javascript
import Checkbox from '@congritta-ui/checkbox';
```

into your code

## How to use

Example:

```jsx
export default MyComponentWidthCheckbox() {
  const [value, setValue] = useState(true)

  return (
    <Checkbox
      isActive={true}
      onTriggered={() => setValue(!value)}
      contents="Text for checkbox here"
    />
  )
}
```

### Props

| Prop name                               | Description                                                           | Is Required | Default value                         |
|-----------------------------------------|-----------------------------------------------------------------------|-------------|---------------------------------------|
| isActive                                | Is checkbox active                                                    | true        |                                       |
| contents                                | Contents to the right of checkbox                                     | false       |                                       |
| onTriggered                             | Function that executes when user clicks on Checkbox component         | false       |                                       |
| unactiveIcon                            | svg element of checkbox when inactive                                 | false       | `<Integrated icon>`                   |
| activeIcon                              | svg element of checkbox when active                                   | false       | `<Integrated icon>`                   |
| wrapperClassName                        | Class name for wrapper for adding additional styles                   | false       |                                       |
| iconClassName                           | Class name for checkbox icon wrapper for adding additional styles     | false       |                                       |
| contentsClassName                       | Class name for checkbox contents wrapper for adding additional styles | false       |                                       |
