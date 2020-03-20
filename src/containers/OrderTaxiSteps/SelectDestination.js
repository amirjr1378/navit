import React from "react";
import { Menu } from "../../components/Icons";
import { Button } from "../../components/Button";
import Dropdown, { Toggle, Content } from "../../components/Dropdown/Dropdown";
import { useHistory } from "react-router-dom";
import { Search } from "../../components/Form";
import useToggle from "../../hooks/useToggle";
import Collapse from "../../components/Collapse";
import { useEarlyData } from "../../hooks";
import Suggestion from "../../components/Suggestion";

const INITIAL_SUGGESTIONS = [
  {
    id: 1,
    brandLogo: "https://shahrfarsh.com/images/ShahrFarsh-Site-Logo.png",
    diffTime: 25,
    price: 10000
  },
  {
    id: 2,
    brandLogo: "https://shahrfarsh.com/images/ShahrFarsh-Site-Logo.png",
    diffTime: 15,
    price: 20000
  },
  {
    id: 3,
    brandLogo: "https://shahrfarsh.com/images/ShahrFarsh-Site-Logo.png",
    diffTime: 5,
    price: 12000
  }
];
function SelectDestination(props) {
  const [loading, toggle] = useToggle(false);
  const [suggestions, isLoadingSuggesstion] = useEarlyData(
    "/suggestions",
    INITIAL_SUGGESTIONS
  );
  const nextStep = async () => {
    toggle();
    try {
      await props.selectDestination();
      toggle();
    } catch (error) {
      console.log(error);
      toggle();
    }
  };
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

        <Button
          round
          color="warning-outline"
          onClick={() => console.log("click")}
        >
          <span className="lnr lnr-star" style={{ margin: ".7em" }} />
          مکان های منتخب
        </Button>
        <Button circle color="warning-outline" onClick={props.decrease}>
          <span className="lnr lnr-arrow-left" />
        </Button>
      </div>

      <div className="destination__footer">
        <div className="destination__footer__content">
          <Collapse>
            <Collapse.Content>
              <h2>مقصــد هــای پیشنهــادی ناویــت</h2>
              {suggestions &&
                suggestions.map(s => <Suggestion {...s} key={s.id} />)}
            </Collapse.Content>
            <Collapse.Toggle>
              <Button
                color="warning-reverse"
                block
                disabled={isLoadingSuggesstion}
              >
                مشاهده همه پیشنهاد ها
              </Button>
            </Collapse.Toggle>
          </Collapse>
          <div style={{ margin: ".7em 0" }}>
            <Search name="origin" placeholder="جستجوی محل مورد نظر" />
          </div>
          <Button block onClick={nextStep} color="warning" loading={loading}>
            مقصد را انتخاب کنید
          </Button>
        </div>
      </div>
    </>
  );
}

export default React.memo(SelectDestination);
