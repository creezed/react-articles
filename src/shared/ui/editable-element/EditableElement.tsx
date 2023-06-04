import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

interface EditableElementProps extends PropsWithChildren {
  onChange: (value: string) => void;
}

export const EditableElement: FC<EditableElementProps> = ({
  onChange,
  children,
}) => {
  const element = useRef<HTMLDivElement>(null);
  const child = Children.only(children);

  const onMouseUp = () => {
    const value =
      element.current?.textContent || element.current?.innerText || '';
    onChange(value);
  };

  useEffect(() => {
    const value =
      element.current?.textContent || element.current?.innerText || '';
    onChange(value);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const clonedElement = cloneElement(child, {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp,
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{clonedElement}</>;
};
