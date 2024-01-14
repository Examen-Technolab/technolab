import React from "react";
import DoubleTile from "../DoubleTile/DoubleTile";
import api from "../../utils/Api";
import { appStore } from "../../stores/AppStore";

function Education(props) {

  React.useEffect(() => {
    appStore.setLoading(true);
    api.getList(props.list, props.setList, 'education', () => {
      appStore.setLoading(false);
    });
  }, []);

  return (
    <main className="section">
      <h1 className="hidden">{props.title}</h1>
      <ul className="education__list">
        {
          props.list.map((item, index) => {
            return (
              <DoubleTile
                key={"education" + index}
                promoClass={`education__promo education__promo_type_${item.type}`}
                promo={
                  <>
                    <h2 className="text text_uppercase education__title">{item.title}</h2>
                  </>
                }

                about={
                  <>
                    <p className="text education__about">{item.about}</p>
                  </>
                }

                links={
                  [
                    {
                      link: item.link,
                      target: item.isExtern ? '__blank' : undefined,
                    },
                  ]
                }
              />
            )
          })
        }
      </ul>
    </main>
  );
}
export default Education;