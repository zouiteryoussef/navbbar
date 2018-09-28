import React, { Component } from "react";
import "./styles.css";

export const Link = props => <a href={props.array.link}>{props.array.name}</a>;
class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: -1
    };
  }
  handleMouseHover = i => {
    this.setState({
      isActive: i
    });
  };
  render() {
    const isDisplayed =
      this.state.isActive !== -1 &&
      this.props.navlist[this.state.isActive].children;

    return (
      <div className="NavMenu">
        <ul className="Mainnmenu">
          {this.props.navlist.map((el, i) => (
            <li
              key={i}
              onMouseOver={() => {
                this.handleMouseHover(i);
              }}
            >
              <Link array={Object.assign(this.state.isActive === i, el)} />
            </li>
          ))}
        </ul>
        {isDisplayed && (
          <div>
            <ul className="SubMenu">
              {this.props.navlist[this.state.isActive].children.map(
                (elem, i) => (
                  <li key={i}>
                    {" "}
                    <Link array={elem} />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
export default NavMenu;
