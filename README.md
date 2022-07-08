<div align="center">
    <h1>react-modal-e2z</h1>
    <a href="https://github.com/delpikye-v/react-modal">react-modal-e2z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/s/t4wfop">LIVE EXAMPLE</a></b>
</div>

---

#### Description

+ Simple modal.
+ Append to portal

---
### Usage

Install the package

```js
npm install --save react-modal-e2z
```

Import the module in the place you want to use:
```js
import "react-modal-e2z/build/styles.css";
import Modal from "react-modal-e2z";

```

#### Snippet
```js
    const [isShow, setShow] = React.useState(false);

    <Modal isOpen={isShow} center handleOpen={setShow}>
        This is modal

        {/* <Modal>
          {[...Array(10)].map((item, index) => {
            return <div key={index}>index {index}</div>;
          })}
        </Modal> */}
    </Modal>
```

---


#### props

see <b>index.d.ts</b>


| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|
|id?                   | string
|modalId?              | string
|isOpen?               | boolean
|center?               | boolean  (false)
|className?            | string
|showHeader?           | boolean (true)
|showFooter?           | boolean
|modalTitle?           | string
|modalHeader?          | ReactNode
|modalFooter?          | ReactNode
|showExtraButton?      | boolean (false)
|showAcceptButton?     | boolean (true)
|showCancelButton?     | boolean (true)
|showXClose?           | boolean (true)
|escapeClose?          | boolean (true)
|toggleTitleExpand?    | boolean (false)
|fullSceen?            | boolean (false)
|&nbsp;                |
|classNameAccept?      | string
|classNameCancel?      | string
|classNameExtra?       | string
|labelAccept?          | string  ("OK")
|labelCancel?          | string ("CANCEL")
|labelExtra?           | string ("EXTRA")
|handleToggle?         | Function // fullSceen or default
|handleAccept?         | Function
|handleCancel?         | Function
|hanldeXClose?         | Function // default like handleCancel
|handleExtra?          | Function // when showExtraButton = true
|handleOpen?           | Function // => handle show modal


<br />

#### Note

<br />

#### RUN

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

### License

MIT
