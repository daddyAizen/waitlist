import { defineNuxtPlugin } from '#app'
import { useRouter } from 'vue-router'

// Third-party libraries
import $ from 'jquery'
import _ from 'lodash'
import noUiSlider from 'nouislider'
import 'datatables.net'
import 'dropzone/dist/dropzone-min.js'
import * as VanillaCalendarPro from 'vanilla-calendar-pro'
import 'preline'

window._ = _
window.$ = $
window.jQuery = $
window.DataTable = $.fn.dataTable
window.noUiSlider = noUiSlider
window.VanillaCalendarPro = VanillaCalendarPro

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach(() => {
    setTimeout(() => {
      // Ensure HSStaticMethods exists before calling
      if (window.HSStaticMethods?.autoInit) {
        window.HSStaticMethods.autoInit()
      }
    })
  })
})
