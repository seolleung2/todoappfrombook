import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // form 에 걸게 될 onSubmit 이벤트는 브라우저에서 새로고침을 발생시킨다. 그럼 적어놓은 일정이 홀랑 날아가게 된다.
      e.preventDefault();
    },
    [onInsert, value],
  );
  // ! 부모 컴포넌트가 렌더링되거나, 상태(state)가 변경되는 경우, React 컴포넌트는 렌더링을 유발한다.
  // ! 이러면 불필요한 메모리를 낭비하고 최적화도 좋지 않다고 한다. 특정 상태의 변경과 상관없는 함수의 경우 useCallback을 사용하면 매번 새로 생성되는 것을 방지할 수 있다고..
  // const handleChange = (e) => setValue(e.target.value);
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
