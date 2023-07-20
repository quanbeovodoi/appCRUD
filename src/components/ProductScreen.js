import allData from "../stores/allData.js";
import DefaultLayout from "./DefaultLayots.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Pagination from "./Pagination.js";
import Sidebar from "./Sidebar.js";
const products = {content: allData.products};
const ProductScreen = {
  render: async (newProducts) => {
    if(!newProducts) newProducts = {content: allData.products};
    return `
        <div class="content_page">
            <div class="box_list">
                <div class="title font-bold">
                  <h2>Danh sách sản phẩm</h2>
                </div>
                <div class="ext">
                    <div class="search_bar">
                        <input type="text" name="search" id="searchBar" placeholder="search....">
                        <div class="icon-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                        </div>
                    </div>
                    <div class="btn-event">
                        <button class="btn primary text-base font-semibold" id="add_product">
                            Thêm mới
                        </button>
                        <button class="btn transparent text-base font-semibold" id="filter_product">
                            Bộ lọc
                        </button>
                    </div>
                </div>
                <div class="filter" id="filter">
                </div>
                <div class="box_table">
                  <div class="table_area">
                      <table>
                        <thead>
                          <tr class="bg-stone">
                            <th>Sản phẩm</th>
                            <th>Loại</th>
                            <th>Ngày tạo sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá sàn</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${newProducts.content.map(
                            (item,index)=>{
                                let bgColor = index%2 != 0?'bg-stone':''
                                return `<tr class = ${bgColor}>
                                <td class="font-bold">${item.name}</td>
                                <td>${item.type}</td>
                                <td>${item.date}</td>
                                <td>${item.quantity} cái</td>
                                <td>${item.price} VND</td>
                                <td>${item.status?'<div class="btn-green">Còn hàng</div>':'<div class="btn-red">Hết hàng</div>'}</div></td>
                                <td>
                                    <div class="icon edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path></svg></div>
                                    <div class="icon trash"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg></div>
                                </td>
                              </tr>`
                            }
                          ).join('')}
                        </tbody>
                      </table>
                  </div>
                </div>
                ${
                    await Pagination.render(products)
                }
              </div>
          </div>
        `;
  },after_render: ()=>{
    const newProducts = {content: allData.products};
    if(Pagination.after_render)
        Pagination.after_render(newProducts,async()=>{
            const app = document.getElementById('root');
            const contentRender = await ProductScreen.render(newProducts)
            app.innerHTML = await DefaultLayout.render(contentRender);
            if(ProductScreen.after_render){
                ProductScreen.after_render();
            }
            if(Sidebar.after_render)
            await Sidebar.after_render();
            if(Header.after_render)
            await Header.after_render();
            if(Footer.after_render)
            await Footer.after_render();
        })
    const addItem = document.getElementById("add_product");
    const filter = document.getElementById("filter_product");
    let filterBool = true;
    addItem.addEventListener('click',()=>{
        document.getElementById("edit_area").innerHTML = `<div class="editTemplate"><div class="box_edit">
        <div class="ext">
            <div class="title font-bold">
                <h2>Thêm mới sản phẩm</h2>
            </div>
            <div class="btn-event">
                <button class="btn primary text-base font-semibold">
                    Lưu lại
                </button>
                <button class="btn transparent text-base font-semibold" id="turnOff">
                    Quay lại
                </button>
            </div>
        </div>
        <div class="input-area">
            <table>
                <tr>
                    <td><div class="input-field"><input class="text-base" type="text" placeholder="Sản phẩm"></div></td>
                    <td>
                        <div class="input-field">
                            <label for="prd_number" class="text-xs">Số lượng</label>
                            <input class="text-base" type="text" name="prd_number" value="100 cái">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="input-field">
                            <select class="text-base" name="" id="">
                                <option value="0">Loại SP</option>
                                <option value="Bàn">Bàn</option>
                                <option value="Chuột">Chuột</option>
                                <option value="Tai nghe">Tai nghe</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="input-field">
                            <select class="text-base" name="" id="">
                                <option value="0">Trạng thái</option>
                                <option value="Còn hàng">Còn hàng</option>
                                <option value="Hết hàng">Hết hàng</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="input-field">
                            <label for="date" class="text-xs">Ngày tạo</label>
                            <input class="text-base" type="date" name="date" value="2023-02-09"/>
                        </div>
                    </td>
                    <td>
                        <div class="input-field">
                            <label for="price" class="text-xs">Giá bán</label>
                            <input class="text-base" type="text" value="2.800.000 VND">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        </div></div>`
        document.getElementById('turnOff').addEventListener('click',()=>{
            document.getElementById('edit_area').innerHTML = ''
        })
    })
    filter.addEventListener('click',()=>{
        if(filterBool){
            document.getElementById("filter").innerHTML = `<div class="input-area">
                <table>
                    <tr>
                        <td><div class="input-field"><input class="text-base" type="text" placeholder="Sản phẩm"></div></td>
                        <td>
                            <div class="input-field">
                                <label for="prd_number" class="text-xs">Số lượng</label>
                                <input class="text-base" type="text" name="prd_number" value="100 cái">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="input-field">
                                <select class="text-base" name="" id="">
                                    <option value="0">Loại SP</option>
                                    <option value="Bàn">Bàn</option>
                                    <option value="Chuột">Chuột</option>
                                    <option value="Tai nghe">Tai nghe</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div class="input-field">
                                <select class="text-base" name="" id="">
                                    <option value="0">Trạng thái</option>
                                    <option value="Còn hàng">Còn hàng</option>
                                    <option value="Hết hàng">Hết hàng</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>`
            document.getElementById("filter_product").innerHTML = 'Ẩn bộ lọc';
            filterBool = false;
        }else{
            document.getElementById("filter").innerHTML = '';
            document.getElementById("filter_product").innerHTML = 'Bộ lọc';
            filterBool = true;
        }
    })
  }
};
export default ProductScreen;