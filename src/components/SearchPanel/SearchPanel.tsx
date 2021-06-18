import React from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import Select, { ValueType } from '@atlaskit/select';
import styles from './SearchPanel.module.css';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLElement>;
  changeSelect: (value: ValueType<OptionType, false>) => void;
};

type OptionType = {
  label: string;
  value: string;
};

const optionArray: OptionType[] = [
  { label: 'Name', value: 'name' },
  { label: 'Modified', value: 'modified' },
  { label: '-Name', value: '-name' },
  { label: '-Modified', value: '-modified' },
];

const SearchPanel = ({ value, onChange, onClick, changeSelect }: Props): JSX.Element => {
  return (
    <div className={styles.panel}>
      <Textfield
        name="basic"
        aria-label="default text field"
        onChange={onChange}
        type="text"
        value={value}
        placeholder="Hero name..."
      />
      <Select
        classNamePrefix="react-select"
        options={optionArray}
        placeholder="Sort by..."
        className={styles.select}
        onChange={(value: ValueType<OptionType, false>) => changeSelect(value)}
      />
      <Button onClick={onClick} appearance="primary">
        Search!
      </Button>
    </div>
  );
};

export default SearchPanel;
