import React, {useState} from "react";
import {fireEvent, render, screen, waitFor} from "../../../../../testUtils/test-utils";
import {Provider} from "react-redux";
import {store} from "../../../../../store";
import {TokenQueueMockProvider} from "../../../../../testUtils/testHelper";
import MainInputForm from "../MainInputForm";
import Mock = jest.Mock;

type EditorSetupProps = {
  onClick: Mock
}

const EditorSetup: React.FC<EditorSetupProps> = ({onClick}: EditorSetupProps) => {
  const [valueText, setValueText] = useState<string | null>(null);

  const handleMessageChange = (text: string | null) => {
    setValueText(text);
  }

  return <MainInputForm value={valueText} onSubmitClick={onClick} buttonText='Click'
                        onValueChange={handleMessageChange} inputTextProps={{name: 'title'}}/>;
}

it("MainInputForm renders with a disabled submit button", async () => {
  const onClick = jest.fn();

  render(
    <Provider store={store}>
      <TokenQueueMockProvider>
        <EditorSetup onClick={onClick}/>
      </TokenQueueMockProvider>
    </Provider>
  );

  const nextButton = screen.getByRole('button');
  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(0);

  let input = screen.getByRole('textbox');
  expect(input).toHaveValue('');

  fireEvent.change(input, {target: {value: 'Hello'}});
  expect(input).toHaveValue('Hello');

  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(1);

  fireEvent.change(input, {target: {value: ''}});

  // must be disabled when input is empty
  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(1);

  fireEvent.change(input, {target: {value: 'hi'}});
  fireEvent.click(nextButton);

  expect(onClick).toHaveBeenCalledTimes(2);
});