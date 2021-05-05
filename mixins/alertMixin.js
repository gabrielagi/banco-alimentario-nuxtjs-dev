import Vue from 'vue'
import alert from '@/components/alert'

const alertMixin = {
  methods: {
    new_alert(data) {
      const ComponentClass = Vue.extend(alert)
      const instance = new ComponentClass({
        propsData: { alert: data },
      })
      instance.$mount() // pass nothing
      document.body.appendChild(instance.$el)
    },
    newAlert(data) {
      const ComponentClass = Vue.extend(alert)
      const instance = new ComponentClass({
        propsData: { alert: data },
      })
      instance.$mount() // pass nothing
      document.body.appendChild(instance.$el)
    },
  },
}

export default alertMixin
