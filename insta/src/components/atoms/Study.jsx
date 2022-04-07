import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const Child = () => {
  useEffect(() => {
    console.log("mount"); // 조건이 비어있을때는 컴퍼넌트가 나왔을때 실행 (조건이 있다면 조건이 바뀔때마다 실행)
    return () => {
      console.log("unmount");
    }; //조건이 비어있을때는 컴퍼넌트가 사라질때만 실행(조건이 있다면 조건이 바뀌기 바로 직전에 실행)
  }, []); // 조건이 없다면 렌더링 완료될때마다 실행됨.
  return <>child</>;
};

const Study2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  useEffect(() => {
    console.log("kk");
    return () => {
      console.log("clean");
    };
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <input onChange={(e) => setNickName(e.target.value)} />
      <button onClick={() => setShow((prev) => !prev)}>butotn</button>
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>
      {show && <Child />}
    </>
  );
};

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const Study = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  const avg = useMemo(() => getAverage(list), [list]);

  const onInsert2 = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const inputEl = useRef(null);
  const inputFile = useRef(null);
  return (
    <div>
      <input type="file" ref={inputFile} style={{ display: "none" }} />
      <button onClick={() => inputFile.current.click()}>asd</button>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert2}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};
export default Study;
