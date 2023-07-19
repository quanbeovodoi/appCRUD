const HomeScreen = {
    render: async ()=>{
        return `
        <div class="content_page">
        <div class="chart">
          <canvas id="myChart"></canvas>
        </div>
        <div class="row">
          <div class="col-4 mr-5">
            <div class="box_list">
              <div class="title font-bold">Khách hàng thân thiết</div>
              <ul>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left">
                      <div class="box_item-img">
                        <img
                          src="./src/assets/images/avatar.png"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="box_item-des">
                        <div class="box_item-title font-bold text-sm">
                          Nguyễn Văn A
                        </div>
                        <div class="box_item-subtitle text-xs">
                          email@example.com
                        </div>
                      </div>
                    </div>
                    <div class="box_item-right font-bold">
                      1.000.000 VNĐ
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-8 ml-5">
            <div class="box_list">
              <div class="title font-bold">Sản phẩm bán chạy</div>
              <ul>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
                <li>
                  <div class="box_item">
                    <div class="box_item-left flex-col">
                      <div class="box_item-title font-bold text-sm">
                        Bàn chơi game
                      </div>
                      <div class="box_item-subtitle text-xs">
                        Mã SP: 0123456
                      </div>
                    </div>
                    <div class="box_item-right text-sm">
                      <span class="font-bold">70</span> sales
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="box_list">
            <div class="title font-bold">
              <p>Đơn hàng gần nhất</p>
              <span class="sub_title font-light text-sm">Danh sách 6 đơn hàng gần nhất</span>
            </div>
            <div class="box_table">
              <div class="table_area">
                <table>
                  <thead>
                    <tr class="bg-stone">
                      <th>Khách hàng</th>
                      <th>Thời gian</th>
                      <th>Thành tiền</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="font-bold">Nguyễn Văn A</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                    <tr class="bg-stone">
                      <td class="font-bold">Nguyễn Văn B</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                    <tr>
                      <td class="font-bold">Nguyễn Văn C</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                    <tr class="bg-stone">
                      <td class="font-bold">Nguyễn Văn D</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                    <tr>
                      <td class="font-bold">Nguyễn Văn E</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                    <tr class="bg-stone">
                      <td class="font-bold">Nguyễn Văn F</td>
                      <td>Jun 23,2022</td>
                      <td>2.300.000 VND</td>
                      <td>Hoàn thành</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    },
    after_render: ()=>{
      const ctx = document.getElementById("myChart");
      if(ctx){const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      const Data = {
        labels: labels,
        datasets: [
          {
            label: "Doanh thu",
            data: [1050, 2400, 1600, 1800, 900, 400, 1000],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 1,
            tension: 0.1,
          },
        ],
      };
      new Chart(ctx, {
        type: "line",
        data: Data,
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 0.5,
              to: 0.5,
              loop: true
            }
          },
          interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
          },
          responsive: true,
          plugins: {
            subtitle: {
              display: true,
              text: "Doanh thu",
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
        },
      });}
    }
}
export default HomeScreen;