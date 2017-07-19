# react-smart-checkbox
**Installation:**
*  npm
```bash
npm i -P react-smart-checkbox
```
*  yarn
```bash
yarn add react-smart-checkbox
```
**How to use:**
*  import component
```js
import ReactSmartCheckbox from 'react-smart-checkbox'
```
* use component
```js
<ReactSmartCheckbox
  name='fruits'
  options={['orange', 'apple', 'banana']}
/>
```

Read more below about component's additional attributes &darr;

| attribute         | type   | required |
|-------------------|--------|----------|
| **name**          | string | true     |
| **options**       | array  | true     |
| **initialValues** | array  | false    |
| **onChange**      | func   | false    |


* **initialValues** should pass array to check any child(s) on componentWillMount hook triggers
* **onChange** is callback function and returns checked childrens array
