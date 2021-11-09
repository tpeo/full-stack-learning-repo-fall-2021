import "./style.css";

export default function ListItem(props) {
  // returns either the finishTask or undoTask function to handle clicking on the icon depending the type property
  function handleClick() {
    if (props.type === "todo") {
      return props.finishHandler(props.index);
    } else if (props.type === "done") {
      return props.undoHandler(props.index);
    }
  }

  let icon;
  if (props.type === "todo") {
    icon = <img src="/assets/checkmark.svg" alt="checkmark" class="icon"></img>;
  } else if (props.type === "done") {
    icon = <img src="/assets/arrow-undo.svg" alt="undo" class="icon"></img>;
  }

  return (
    <li key={props.index}>
      <div className="list-item">
        {props.task}
        <button
          className={`icon-container ${props.type}`}
          onClick={() => handleClick()}
        >
          {icon}
        </button>
      </div>
    </li>
  );
}
