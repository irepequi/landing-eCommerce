import { useState, useEffect } from "react";
import axios from "axios";
import backend from "./backend.json";

//COMPONENTS
import { Header } from "./components/Header";
import { Photography } from "./components/Photography";

//SCSS STYLE
import "./scss/styles.scss";

function App() {
  const [onePage, setOnePage] = useState([]);
  const [dataOnePage, setDataOnePage] = useState([]);
  // console.log("BACKEEEEEEEND", backend.item[1].request);
  // const back = backend.item[1].request;

  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "https://technical-frontend-api.bokokode.com/api/products",
  //     headers: { key: "Accept", value: "application/json", type: "text" },
  //     data: {
  //       sort: {
  //         key: "price",
  //         type: "ASC",
  //       },
  //       categories: ["cities"],
  //     },
  //   });
  //   // .then((res)=>console.log(res.data))
  // }, []);

  useEffect(() => {
    axios
      .post("https://technical-frontend-api.bokokode.com/api/products")

      .then((res) => {
        console.log("esto es res.data.data", res.data.data);
        console.log(
          "esto es res.data en posición 0 (res.data[0]",
          res.data.data.data[0]
        );

        setOnePage(res.data.data);
        setDataOnePage(res.data.data.data[0]);
        // setOnePage(JSON.parse(res.data.data));
        // setDataOnePage(JSON.parse(res.data.data.data[0]));
      });
  }, []);

  return (
    <>
      <figure className="cart">
        <img src={"/images/shopping-cart.png"} alt="cart" />
      </figure>
      <hr />
      <Header dataOnePage={dataOnePage} />
      <hr />
      <Photography onePage={onePage} dataOnePage={dataOnePage} />

      {/* PAGINATION */}
      <section className="pagination">
        {/* 
        <a href="" className="active">{onePage.links[0].label}</a>
        <a href="" {onePage.active && className="active"}>{onePage.links[1].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[2].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[3].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[4].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[5].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[6].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[7].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[8].label}</a> 
        <a href="" {onePage.active && className="active"}>{onePage.links[9].label}</a> 
        <a href="" className="active">{onePage.links[10].label}</a>   
        */}

        <a href="" className="active">
          &lt;
        </a>
        <a href="">1</a>
        <a href="">2</a>
        <a href="" className="active">
          3
        </a>
        <a href="">4</a>
        <a href="" className="active">
          &gt;
        </a>
      </section>
    </>
  );
}

export default App;
