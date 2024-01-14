import React from 'react';
import { popupStore } from '../../stores/PopupStore';

function PlusButton(props) {

  return (
    <button type="button" title={props.title} onClick={() => { popupStore.open(props.popupContent) }} className="plus-btn" />
  );
}
export default PlusButton;