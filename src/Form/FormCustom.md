`<FormCustom />` component example:

```js
import {
  Form,
  FormGroup,
  FormCustom,
  Hr,
} from '$PACKAGE_NAME';

<Form>
  <FormGroup>
    <FormCustom>Check this custom checkbox</FormCustom>
    <FormCustom>Check this custom checkbox</FormCustom>
    <Hr />
    <FormCustom radio={{ id: 'id-radio-1', name: 'name'}}>Check this custom radio</FormCustom>
    <FormCustom radio={{ id: 'id-radio-2', name: 'name'}}>Check this custom radio</FormCustom>
  </FormGroup>
</Form>
```
