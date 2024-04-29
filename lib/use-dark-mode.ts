import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, { classNameDark: 'dark' })

  return {
    // isDarkMode: darkMode.value,
    isDarkMode : false,
    toggleDarkMode: darkMode.toggle
  }
}
