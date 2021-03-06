/**
 * Author @Eko_cahyanto
 * Siswa @G2_Academy
 * Batch @April2021
 * Tutor @Wawan_Setyawan
 */
import "./body.css";
import API from "../../service/API/api";
import { Title, Restaurant } from "../../component";
import { Promo, Kategori } from "../../page";
import React, { Component } from "react";
import { connect } from "react-redux";
class body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [
        {
          image:
            "https://asset-a.grid.id/crop/0x113:825x629/360x240/photo/2020/05/16/2464089360.jpg",
          title: "Krusty Krub",
        },
        {
          image:
            "https://yt3.ggpht.com/ytc/AAUvwnjPfFw2XSidVzuG7C0lVdUH_kKradd-ToC7vaIkuQ=s900-c-k-c0x00ffffff-no-rj",
          title: "Pemadam Kelaparan",
        },
        {
          image:
            "https://2.bp.blogspot.com/-SX-dSNSPX1k/WoKXKk5rxUI/AAAAAAAAABA/B-P4-O2sz8c8q1QZmqbWUKDR-CVnJw64ACEwYBhgL/s1600/IMG-20180213-WA0001.jpg",
          title: "Geprek Pemadam Kelaparan",
        },
      ],
    };
  }
  getRestaurant = () => {
    const { restaurant } = this.state;
    return restaurant.map((data) => (
      <Restaurant
        action={() => alert(data.title)}
        image={data.image}
        nameRM={data.title}
      />
    ));
  };
  componentDidMount() {
    const data = { id_lokasi: 1 };
    API.getLokasi(data);
  }
  render() {
    return (
      <div className="konten">
        <Title>Promo Hari ini</Title>
        <Promo />
        <Title>Pilih Kategori</Title>
        <Kategori />
        <Title>Pilih Restaurant</Title>
        <div className="restaurant">{this.getRestaurant()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getProduct: state.Product,
});
export default connect(mapStateToProps)(body);
