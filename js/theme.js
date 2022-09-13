const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//console.log(preferedColorScheme);
const slider = document.getElementById('slider');  // slider
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
slider.addEventListener('click', () =>{
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || preferedColorScheme);
