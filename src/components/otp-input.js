import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Container, CtnItemInput, ItemInput } from "./otp-input.element";
import _ from "lodash";

// RowInput
const RowInput = ({ onNext, onPrev, index, isActive, onFocus, ...props }) => {
  const [value, setValue] = useState("");
  const input = useRef();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.match(/^\d+$/g)) {
      onNext && onNext();
    }
    if (value == "") {
      onPrev && onPrev();
    }
  }, [value]);

  useEffect(() => {
    if (index === isActive) {
      input.current.focus();
    }
  }, [isActive]);

  return (
    <CtnItemInput>
      <ItemInput
        ref={input}
        maxLength="1"
        onChange={onChange}
        onFocus={onFocus}
        {...props}
        value={value}
      />
    </CtnItemInput>
  );
};
// OtpInput
const OtpInput = ({ numberInput = 6, value, onChange, onDone }) => {
  const [isActive, setIsActive] = useState(0);

  const onNext = (index) => {
    let nextIndex = ++index;
    if (nextIndex === numberInput) onDone && onDone();
    else setIsActive(nextIndex);
  };

  const onPrev = (index) => {
    let prewIndex = --index;
    if (prewIndex >= 0) setIsActive(prewIndex);
  };

  const onFocus = (index) => {};
  return (
    <Container>
      {Array.from(Array(numberInput).keys()).map((value, index) => {
        console.log("value", index);
        return (
          <RowInput
            key={index}
            isActive={isActive}
            onNext={() => onNext(index)}
            onPrev={() => onPrev(index)}
            onFocus={() => onFocus(index)}
            index={index}
          ></RowInput>
        );
      })}
    </Container>
  );
};

export default OtpInput;
