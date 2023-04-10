import { defineCustomElement } from 'vue'
import SimpleSampleComponent from './SimpleSample.ce.vue'

const SimpleSample = defineCustomElement(SimpleSampleComponent)

customElements.define('simple-sample', SimpleSample)