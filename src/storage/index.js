const STORAGE_KEY = 'mall'

export default {
  setItem(key, value, module_name) {
    if (module_name) {
      let values = this.getItem(module_name)
      values[key] = value
      this.setItem(module_name, values)
    } else {
      let values = this.getStorage()
      values[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values))
    }
  },
  getItem(key, module_name) {
    if (module_name) {
      let value = this.getItem(module_name)
      if (value) return value[key]
    }
    return this.getStorage()[key]
  },
  getStorage() {
   return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear(key, module_name) {
    let values = this.getStorage()
    if (module_name) {
      delete values[module_name][key]
    } else {
      delete values[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values))
  }
}