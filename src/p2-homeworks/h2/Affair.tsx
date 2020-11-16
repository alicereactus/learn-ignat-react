import React from "react";
import { AffairType } from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (affairID: number) => void; // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) };// need to fix

  return (
    <div className={s.todo}>
      <div key={props.affair._id}>
        <span>{props.affair._id} </span>
        <span>{props.affair.name} </span>
        <span>{props.affair.priority}</span>
        <button className={s.btnDelete} onClick={deleteCallback}>X</button>
      </div>
    </div>
  );
}

export default Affair;
