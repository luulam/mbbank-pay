import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Container, CtnItemInput, ItemInput, Line } from "./otp-input.element";
import _ from "lodash";
import * as R from "ramda";
// RowInput
const RowInput = ({
  onNext,
  onPrev,
  onChange,
  index,
  isActive,
  onFocus,
  isShowCenter,
  ...props
}) => {
  const [value, setValue] = useState(undefined);
  const input = useRef();

  const onChangeText = (e) => {
    if (e.target.value.match(/^\d+$/g) || e.target.value == "") {
      onChange(e.target.value);
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    if (!value) return;
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
  console.log("isShowcenter", isShowCenter);
  return (
    <CtnItemInput>
      <ItemInput
        ref={input}
        maxLength="1"
        onChange={onChangeText}
        onFocus={onFocus}
        {...props}
        value={value}
      />
      {isShowCenter ? <Line>-</Line> : undefined}
    </CtnItemInput>
  );
};

// OtpInput
const OtpInput = forwardRef(({ numberInput = 8, onDone, className }, ref) => {
  const [isActive, setIsActive] = useState(0);
  const [listDataInput, setListDataInput] = useState(
    Array.from(Array(numberInput))
  );

  const getValue = () => {
    let str = "";
    listDataInput.forEach((value) => {
      if (value && value !== "") str += value;
    });
    return str;
  };

  const onNext = (index) => {
    let nextIndex = ++index;
    if (nextIndex <= numberInput) setIsActive(nextIndex);
  };

  const onPrev = (index) => {
    let prewIndex = --index;
    if (prewIndex >= 0) setIsActive(prewIndex);
  };

  const onChange = (value, index) => {
    setListDataInput(R.update(index, value, listDataInput));
  };

  useEffect(() => {
    let strOtp = getValue();
    if (strOtp.length === numberInput) onDone && onDone(strOtp);
  }, [listDataInput]);

  useImperativeHandle(ref, () => ({
    getValue,
  }));

  const onFocus = (index) => {};
  return (
    <Container className={className}>
      {Array.from(Array(numberInput).keys()).map((value, index) => {
        return (
          <RowInput
            key={index}
            isActive={isActive}
            onNext={() => onNext(index)}
            onPrev={() => onPrev(index)}
            onFocus={() => onFocus(index)}
            onChange={(text) => onChange(text, index)}
            isShowCenter={Math.floor(numberInput / 2) - 1 === index}
            index={index}
          />
        );
      })}
    </Container>
  );
});

export default OtpInput;
