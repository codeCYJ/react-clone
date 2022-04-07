import { useState, useRef } from "react";
import styled from "styled-components";
const Container = styled.div`
  margin-left: 150px;
`;
const Practice = () => {
  const [data, setData] = useState([
    { id: 0, text: "할일", checked: true },
    { id: 1, text: "공부", checked: false },
  ]);
  const [text, setText] = useState("");
  // const [nextId, setNextId] = useState(2);
  const nextId = useRef(2);

  const push = (e) => {
    setData([...data, { id: nextId.current, text, checked: false }]);
    e.preventDefault();
    setText("");
    nextId.current += 1;
    console.log(data);
  };
  const handleDelete = (id) => {
    const newData = data.filter((e) => e.id !== id);
    setData(newData);
  };
  const handleChange = (e, id) => {
    const changeData = data.map((a) =>
      a.id === id ? { ...a, checked: e.target.checked } : a
    );
    setData(changeData);
  };
  const handleAllCheck = () => {
    const changeData = data.map((a) => ({ ...a, checked: true }));
    setData(changeData);
  };
  const handleAllUnCheck = () => {
    const changeData = data.map((a) => ({ ...a, checked: false }));
    setData(changeData);
  };
  const handleAllChangeCheck = () => {
    const changeData = data.map((a) => ({ ...a, checked: !a.checked }));
    setData(changeData);
  };
  return (
    <Container>
      <form onSubmit={push}>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <input type="submit" />
      </form>
      <button onClick={() => handleAllCheck()}>전체 선택</button>
      <button onClick={() => handleAllUnCheck()}>전체 해제</button>
      <button onClick={() => handleAllChangeCheck()}>전체 반전</button>
      <ul>
        {data.map(({ text, id, checked }) => (
          <li key={id}>
            <input
              type="checkbox"
              onChange={(e) => handleChange(e, id)}
              checked={checked}
            />
            {text}
            <button onClick={() => handleDelete(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Practice;
