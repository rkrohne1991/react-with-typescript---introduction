import { ChildAsFc } from "./Child";

const Parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log("clicked")}>
      asdasdasd
    </ChildAsFc>
  );
};

export default Parent;
