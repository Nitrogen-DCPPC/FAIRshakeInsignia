# FAIRshakeInsignia
A separate repository for the FAIRshake Insignia Client Javascript Library

## NPM Installation Instructions
```bash
npm install fairshakeinsignia
```

## Usage
```js
import { build_svg_from_score } from 'fairshakeinsignia'

build_svg_from_score(document.getElementById('insignia'), {
  // IDs as on https://fairshake.cloud
  project: 55,
  // target: 1081,
  // rubric: 20,
})
```
