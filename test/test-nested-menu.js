/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import './test-menu.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style>
      .ghost, [hidden] {
        display: none !important;
      }
      .invisible {
        visibility: hidden;
      }
    </style>
    <test-menu id="actualMenu">
      <div>item 1</div>
      <div hidden>item 2</div>
      <div class="ghost">item 3</div>
      <div class="invisible">item 3.1</div>
      <div>item 4</div>
      <div hidden>item 5</div>
      <div class="ghost">item 6</div>
    </test-menu>
`,

  is: 'test-nested-menu'
});
