import React, { Component } from "react";
import {
  ImageKategori as Image,
  TitleKatgeori as Title,
} from "../../component";
class kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg",
          title: "Food",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65MKm0F0I3-fOC-6lIwc9DSqPAno3-7GrMg&usqp=CAU",
          title: "Drink",
        },
      ],
    };
  }
  renderItem = () => {
    const { data } = this.state;
    return (
      <>
        {data.map((item, idx) => (
          <div className="konten" key={idx} onClick={() => alert(item.title)}>
            <Image image={item.img} alt={item.title} />
            <Title>{item.title}</Title>
          </div>
        ))}
      </>
    );
  };
  render() {
    return (
      <div>
        <div className="kategori">{this.renderItem()}</div>
      </div>
    );
  }
}

export default kategori;
