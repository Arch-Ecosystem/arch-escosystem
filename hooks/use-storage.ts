/**
 * `LcoalStorage` and `SessionStorage` hook
 * @param useSessionStorage Use sessionStorage if true.
 */
export const useStorage = (useSessionStorage = false) => {
  const withNs = (moduleName: string) => `arch-ecosystem::${moduleName}`

  /************* Base API *************/
  const get = (key: string) => {
    const k = withNs(key)

    if (typeof window === 'undefined') return null
    return useSessionStorage
      ? sessionStorage.getItem(k)
      : localStorage.getItem(k)
  }

  const set = (key: string, val: string) => {
    const k = withNs(key)

    if (typeof window === 'undefined') return
    return useSessionStorage
      ? sessionStorage.setItem(k, val)
      : localStorage.setItem(k, val)
  }

  const remove = (key: string) => {
    const k = withNs(key)

    if (typeof window === 'undefined') return
    useSessionStorage
      ? sessionStorage.removeItem(k)
      : localStorage.removeItem(k)
  }

  const removeAll = () => {
    if (typeof window === 'undefined') return
    useSessionStorage ? sessionStorage.clear() : localStorage.clear()
  }
  /************* Base API *************/

  return {
    get,
    set,
    remove,
    removeAll,

    // Language related.
    getLang: () => get('lang'),
    setLang: (val: string) => set('lang', val),
  }
}
