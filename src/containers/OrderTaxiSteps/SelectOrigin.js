import React from "react";
import { Menu } from "../../components/Icons";
import { Button } from "../../components/Button";
import Dropdown, { Toggle, Content } from "../../components/Dropdown/Dropdown";
import { useHistory } from "react-router-dom";
import { Search } from "../../components/Form";
import useToggle from "../../hooks/useToggle";

function SelectOrigin(props) {
  const nextStep = async () => {
    toggle();
    try {
      await props.selectOrigin();
      toggle();
    } catch (error) {
      console.log(error);
      toggle();
    }
  };
  const history = useHistory();
  const [loading, toggle] = useToggle(false);
  console.log("render select origin");
  return (
    <>
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

        <Button circle color="warning-outline" onClick={props.findUserLocation}>
          <span className="lnr lnr-location" />
        </Button>
        <Button circle color="warning-outline" onClick={() => history.goBack()}>
          <span className="lnr lnr-arrow-left" />
        </Button>
      </div>

      <div className="services__footer origin__footer">
        <Search name="origin" placeholder="جستجوی محل مورد نظر" />
        <Button block onClick={nextStep} color="warning" loading={loading}>
          مبدا را انتخاب کنید
        </Button>
      </div>
    </>
  );
}

export default React.memo(SelectOrigin);
