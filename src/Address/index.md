An address tag component used to display direct contact information for the author/owner of a document or an article.

This component has no props so you should use it only to let web crawler (google...) know you display an address.

`<Address />` component example:

```js
import { Address, Strong, P, A, Small } from '$PACKAGE_NAME';

<Address>
  <Strong>YeuTech</Strong>
  <P className="mb-0">So 6, Duong 25, Phuong 10</P>
  <P>Quan 6, TP. HCMC</P>
  <A target="_blank" href="https://bootstrap-styled.github.io">
    <Small>bootstrap-styled.github.io</Small>
  </A>
</Address>
```
