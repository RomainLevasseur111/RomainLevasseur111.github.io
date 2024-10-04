import { Page1, Page2, Page3, Page4, NavBar, ThemeSwitcher } from "./import.js";

const Root = () => {
    return (
        <>
            <ThemeSwitcher />
            <NavBar />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </>
    );
};

export default Root;
