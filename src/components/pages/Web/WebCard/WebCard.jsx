import { appStore } from '../../../../stores/AppStore';
import { popupStore } from '../../../../stores/PopupStore';
import { webStore } from '../../../../stores/WebStore';
import api from '../../../../utils/Api';
import Form from '../../../forms/Form/Form';
import { FormAddWeb } from '../../../forms/FormAddWeb/FormAddWeb';
import { AdminBtns } from '../../../generic/AdminBtns/AdminBtns';
import DoubleTile from '../../../generic/DoubleTile/DoubleTile';
import style from '../Web.module.css';

export const WebCard = ({ item }) => {

  const onEditClick = () => {
    popupStore.open(<FormAddWeb data={item} />);
  }

  const onDeleteClick = () => {
    function handleSubmit() {
      webStore.deleteWeb(item.id, popupStore.close);
    }
    popupStore.open(<>
      <p>Вы уверены? Это действие нельзя отменить</p>
      <Form btn="Удалить"
        onFormSubmit={handleSubmit} />
    </>);
  }

  return (
    <li className={style.promo__li}>
      {
        appStore.isAdmin && (
          <AdminBtns
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        )
      }
      <DoubleTile
        promoClass={style.promo + ' ' + style['promo_status_' + item.status]}
        aboutClass={style.about + ' ' + style['about_status_' + item.status]}
        promo={
          <>
            <div className={style.promo__logo}></div>
            <h2 className={style.promo__title}>{item.title}</h2>
            <p className={style.promo__date}>{item.date}</p>
            <p className={style.promo__subtitle}>{item.subtitle}</p>
          </>
        }

        about={
          <>
            <p className={style.promo__about}>{item.about}</p>
          </>
        }

        links={
          [
            {
              link: item.link,
              target: "_blank",
              color: item.color,
              title: item.linkTitle,
              onClick: item.clickHandler,
            },
          ]
        }
      />
    </li>
  )
}