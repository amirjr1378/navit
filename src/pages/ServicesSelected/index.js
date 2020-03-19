import React, { useState } from "react";
import { Map } from "../../components/Map";
import { Menu } from "../../components/Icons";
import { Button } from "../../components/Button";
import "./ServicesSelected.styles.scss";
import ServiceType from "../../components/ServiceType";
import Dropdown, { Toggle, Content } from "../../components/Dropdown/Dropdown";

class ServicesSelected extends React.Component {
  state = {
    viewport: {
      center: [35.6961, 51.4231],
      zoom: 19
    }
  };
  render() {
    const { viewport } = this.state;
    return (
      <div className="services">
        <div style={{ direction: "ltr", width: "100%", height: "100vh" }}>
          <Map
            viewport={viewport}
            onViewportChange={viewport => this.setState({ viewport })}
          />
        </div>
        <div className="services__header">
          <Dropdown>
            <Toggle as={"div"}>
              <Button circle color="warning-outline" style={{ padding: 5 }}>
                <Menu />
              </Button>
            </Toggle>
            <Content>
              <span name="item1">items</span>
              <span name="item2">items</span>
              <span name="item 3">items</span>
            </Content>
          </Dropdown>
          <Button circle color="warning-outline">
            <span className="lnr lnr-arrow-left" />
          </Button>
        </div>

        <div className="services__footer">
          <ServiceType icon="lnr-calendar-full" label="درخواست سرویس" />
          <ServiceType icon="lnr-car" label="درخواست تاکسی" color="warning" />
        </div>
      </div>
    );
  }
}

export default ServicesSelected;
