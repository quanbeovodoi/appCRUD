 import Sidebar from './Sidebar.js';
 import Header from './Header.js';
 import Footer from './Footer.js';
 const DefaultLayout = {
    render: async (children)=>{
        const sidebarRender = await Sidebar.render();
        const headerRender = await Header.render();
        const footerRender = await Footer.render();
        return `
        <div id="edit_area"></div>
        ${headerRender}
        <div class="container text-base">
            ${sidebarRender}
            <div class="wrapper" id="wrapper">
                ${children}
                ${footerRender}
            </div>
        <div>
        `
    }
}

export default DefaultLayout ;